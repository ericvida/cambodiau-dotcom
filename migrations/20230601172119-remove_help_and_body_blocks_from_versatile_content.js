const { iterateTree } = require('../utils/iterateTree');

module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    for (const collection of ['pages', 'bars']) {
      const docs = await db.collection(collection).find().toArray();
      for (const doc of docs) {
        iterateTree(doc.blocks, (tree, key) => {
          if (tree[key].blockType === 'helpText' || tree[key].blockType === 'bodyText') {
            if (Array.isArray(tree)) {
              tree.splice(key, 1);
            } else {
              delete tree[key];
            }
            console.log('\tDeleted', key);
          }
        });
        await db
          .collection(collection)
          .updateOne({ _id: doc._id }, { $set: { blocks: doc.blocks } });
      }
    }
  },

  async down(db, client) {
    // There is no way back, but this function must exist
  },
};
