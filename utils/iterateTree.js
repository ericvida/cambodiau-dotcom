/**
 * A function that iterates through a tree and calls a callback function for each node.
 *
 * There might be cases when some field or block may be at any depth at different collections. And when you want to clean it up or migrate, this function helps you to find it.
 *
 * @param {any} tree Any object or array with deep tree structure.
 * @param {(tree: any, key: string) => void} callback callback function that will be called for each node in the tree.
 */
function iterateTree(tree, callback) {
  for (const key in tree) {
    if (typeof tree[key] == 'object' && tree[key] !== null) {
      // console.log(key, tree[key]); // Comment this out if you're interested only in leafs
      callback(tree, key);
      iterateTree(tree[key], callback);
    } else {
      // console.log(key, tree[key]);
      callback(tree, key);
    }
  }
}

module.exports = {
  iterateTree: iterateTree,
};
