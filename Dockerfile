FROM node:18.16-alpine as base

FROM base as deps

ARG tmp=/home/node/app

WORKDIR ${tmp}
COPY package.json yarn.lock ${tmp}/

RUN yarn install --frozen-lockfile --production

FROM base as builder

ARG tmp=/home/node/app
ENV NODE_ENV=production

WORKDIR ${tmp}

COPY . .
COPY --from=deps ${tmp}/node_modules ${tmp}/node_modules

RUN yarn build

FROM base as runtime

ENV root=/app
ARG tmp=/home/node/app
ENV user=lv
ENV user_id=10000

RUN addgroup \
  -g 10000 \
  -S ${user} && \
  adduser \
  -u 10000 \
  -S ${user} \
  -G ${user} \
  -h ${root} \
  -s /bin/false \
  -D \
  -H

ENV NODE_ENV=production

WORKDIR ${root}

COPY --from=builder ${tmp}/package.json ${root}
COPY --from=builder ${tmp}/yarn.lock ${root}
COPY --from=builder ${tmp}/migrate-mongo-config.js ${root}
COPY --from=builder ${tmp}/node_modules ${root}/node_modules
COPY --from=builder ${tmp}/dist ${root}/dist
COPY --from=builder ${tmp}/utils ${root}/utils
COPY --from=builder ${tmp}/migrations ${root}/migrations
COPY --from=builder ${tmp}/build ${root}/build

USER ${user_id}

CMD ["node", "dist/server.js"]
