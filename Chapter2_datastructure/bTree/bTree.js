export class BTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class BTree {
  constructor(node) {
    this.root = node;
  }

  get root() {
    return this._root;
  }

  set root(node) {
    this._root = node;
  }

  getData(bt) {
    return bt.data;
  }

  setData(bt, data) {
    bt.data = data;
  }

  getLeftSubTree(bt) {
    return bt.left;
  }

  getRightSubTree(bt) {
    return bt.right;
  }

  makeLeftSubTree(main, sub) {
    main.left = sub;
  }

  makeRightSubTree(main, sub) {
    main.right = sub;
  }

  PreorderTraverse(root) {
    if (root === null) {
      return;
    }

    process.stdout.write(root.data.toString() + " ");
    this.PreorderTraverse(root.left);
    this.PreorderTraverse(root.right);
  }

  InorderTraverse(root) {
    if (root === null) {
      return;
    }
    this.InorderTraverse(root.left);
    process.stdout.write(root.data.toString() + " ");
    this.InorderTraverse(root.right);
  }

  PostorderTraverse(root) {
    if (root === null) {
      return;
    }

    this.PostorderTraverse(root.left);
    this.PostorderTraverse(root.right);
    process.stdout.write(root.data.toString() + " ");
  }
}

const init = () => {
  const nodeOne = new bTreeNode(1);
  const binaryTree = new bTree(nodeOne);
  const nodeTwo = new bTreeNode(2);
  const nodeThree = new bTreeNode(3);

  binaryTree.makeLeftSubTree(nodeOne, nodeTwo);
  binaryTree.makeRightSubTree(nodeOne, nodeThree);

  const nodeFour = new bTreeNode(4);
  const nodeFive = new bTreeNode(5);

  binaryTree.makeLeftSubTree(nodeTwo, nodeFour);
  binaryTree.makeRightSubTree(nodeTwo, nodeFive);

  const nodeSix = new bTreeNode(6);
  const nodeSeven = new bTreeNode(7);

  binaryTree.makeLeftSubTree(nodeThree, nodeSix);
  binaryTree.makeRightSubTree(nodeThree, nodeSeven);

  binaryTree.PreorderTraverse(nodeOne);
  console.log(" ");
  binaryTree.InorderTraverse(nodeOne);
  console.log(" ");
  binaryTree.PostorderTraverse(nodeOne);
};

// init();
