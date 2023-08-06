const { iterateTree } = require('../utils/iterateTree');

module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // for menu-categories documents set name as id and delete it
    // NOTE: DEPRECATED!
    // const docs = await db.collection('menu-categories').find().toArray();

    // await Promise.all(
    //   docs.map(async (doc) => {
    //     if (doc.name === undefined) return;
    //     // remember doc id in order to delete it later
    //     const idToDelete = doc._id;
    //     doc._id = doc.name;
    //     const newCategoryId = doc.name;
    //     delete doc.name;

    //     await db.collection('menu-categories').insertOne(doc);

    //     await db.collection('menu-categories').deleteOne({ id: idToDelete });
    //     console.log(`menu-category ${newCategoryId} updated`);

    //     // extract key and value from item
    //     // now query all menu-items and menu-subcategories and update their relation to category
    //     const [menuItems, menuSubcategories] = await Promise.all([
    //       db.collection('menu-items').find({ category: idToDelete }).toArray(),
    //       db.collection('menu-subcategories').find({ category: idToDelete }).toArray(),
    //     ]);
    //     await Promise.all([
    //       Promise.all(
    //         menuItems.map(async (item) => {
    //           item.category = newCategoryId;
    //           await db.collection('menu-items').updateOne({ _id: item._id }, { $set: item });
    //         }),
    //       ).then((result) => {
    //         console.log(`${result?.length} menu-items for ${newCategoryId} updated`);
    //       }),
    //       Promise.all(
    //         menuSubcategories.map(async (item) => {
    //           item.category = newCategoryId;
    //           await db
    //             .collection('menu-subcategories')
    //             .updateOne({ _id: item._id }, { $set: item });
    //         }),
    //       ).then((result) => {
    //         console.log(`${result?.length} menu-subcategories for ${newCategoryId} updated`);
    //       }),
    //     ]);
    //   }),
    // );

    // // rename all «faq-block» blocks to «faqBlock»
    for (const collection of ['pages', 'bars']) {
      const docs = await db.collection(collection).find().toArray();
      for (const doc of docs) {
        iterateTree(doc.blocks, (tree, key) => {
          if (tree[key].blockType === 'faq-block') {
            tree[key].blockType = 'faqBlock';
            console.log('\tUpdated faq-block', key);
          }
        });
        await db
          .collection(collection)
          .updateOne({ _id: doc._id }, { $set: { blocks: doc.blocks } });
      }
    }
  },

  async down(db, client) {
    // return back to original state. The id should return to name
    const docs = await db.collection('menu-categories').find().toArray();

    await Promise.all(
      docs.map(async (doc) => {
        if (doc.name) return;
        // remember doc id in order to delete it later
        const idToDelete = doc._id;
        doc.name = doc._id;
        const newCategoryId = doc.name;
        delete doc._id;

        await db.collection('menu-categories').insertOne(doc);

        await db.collection('menu-categories').deleteOne({ id: idToDelete });
        console.log(`menu-category ${newCategoryId} updated`);
      }),
    );
  },
};
