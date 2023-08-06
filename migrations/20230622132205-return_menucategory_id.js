module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
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

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  },
};
