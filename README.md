# <center>Lucky Voice: Prisoner of Payload</center>

## 🚧 Requirements:

1) setup node version to run a project. Required version check [here](./.nvmrc).

## 🏁 Getting Started

1) `git clone git@github.com:ericvida/ambodiu.git`.
2) `yarn install`.
3) `yarn run dev`.

If you want change environment:
1) create `.env` file.
2) put env variables. Available variables check [here](./.env.example).
3) To fill db with base data open `http://localhost:3000/api/upload-lessons` in browser.

## 📚 Documentation

- 💅 [typescript code styles](https://google.github.io/styleguide/tsguide.html)
- 💅 [git styles](https://luckyvoice.atlassian.net/wiki/spaces/TEAM/pages/1245192/Commit+message+guidelines)

## Workflow for Mongo Migrations
1. Make changes to existing Payload collections
2. If a migration to change existing data is necessary:
3. `yarn migrate create update_collection-name_rename_field`, come up with a consistent format & naming convention for migration files
4. Write the `up` and `down` functions to perform the changes needed, test using local data with simulated production data
5. Commit both the migrations and code changes together in a branch and merge it
6. When pulling changes to a new environment (dev, staging, prod) with data, run `yarn migrate up` and `yarn migrate status` to verify

Migrations are only needed when existing data has changed, they are not needed for simply adding a new field or index. Another use-case for migrations is to insert necessary data for applications to function. Suppose you are adding `roles` as a relationship to be defined on User collections which you want stored in the database and consistent across environments, this is one example and there are many more.

More info at [migrate-mongo](https://github.com/seppevs/migrate-mongo)

## How to run migrations ☕️. Instructions for Teapots 🫖

### Hipster dev commands 👨🏻‍💻

#### If you use mongo on your bare naked shy metal 🦽
```bash
yarn migrate up
yarn migrate down
yarn migrate status
```
#### If you use docker compose 🚢

List running containers `docker ps`. It'll show you something like this:
```bash
CONTAINER ID   IMAGE             COMMAND                  CREATED        STATUS       PORTS                                           NAMES
63f45894e3a0   node:18-alpine    "docker-entrypoint.s…"   2 hours ago    Up 2 hours   0.0.0.0:3000->3000/tcp, :::3000->3000/tcp       cambodiu_payload_1
b0fd4db15dfc   mongo:latest      "docker-entrypoint.s…"   3 weeks ago    Up 2 hours   0.0.0.0:27017->27017/tcp, :::27017->27017/tcp   cambodiu_mongo_1
```

Now grasp the CONTAINER ID of node:18-alpine container and penetrate it: `docker exec -it 63f45894e3a0 sh`. Then run the migration by running the same commads as hipster devs use 👨🏻‍💻.

### Server gang commands 🎩. For use on prod
```bash
npm bin
/app/node_modules/.bin/migrate-mongo up
/app/node_modules/.bin/migrate-mongo down
/app/node_modules/.bin/migrate-mongo status
```
