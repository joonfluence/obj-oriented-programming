export class BTreeNode {
  constructor() {
    this.data = null;
    this.left = null;
    this.right = null;
  }
}

export class BTree {
  constructor(node) {
    this.root = node;
  }

  setData(bt, data) {
    bt.data = data;
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

    console.log(root.data);
    this.PreorderTraverse(root.left);
    this.PreorderTraverse(root.right);
  }

  InorderTraverse(root) {
    if (root === null) {
      return;
    }
    this.InorderTraverse(root.left);
    console.log(root.data);
    this.InorderTraverse(root.right);
  }

  PostorderTraverse(root) {
    if (root === null) {
      return;
    }

    this.PostorderTraverse(root.left);
    this.PostorderTraverse(root.right);
    console.log(root.data);
  }
}

// const init = () => {
//   const nodeOne = new bTreeNode(1);
//   const binaryTree = new bTree(nodeOne);
//   const nodeTwo = new bTreeNode(2);
//   const nodeThree = new bTreeNode(3);

//   binaryTree.makeLeftSubTree(nodeOne, nodeTwo);
//   binaryTree.makeRightSubTree(nodeOne, nodeThree);

//   const nodeFour = new bTreeNode(4);
//   const nodeFive = new bTreeNode(5);

//   binaryTree.makeLeftSubTree(nodeTwo, nodeFour);
//   binaryTree.makeRightSubTree(nodeTwo, nodeFive);

//   const nodeSix = new bTreeNode(6);
//   const nodeSeven = new bTreeNode(7);

//   binaryTree.makeLeftSubTree(nodeThree, nodeSix);
//   binaryTree.makeRightSubTree(nodeThree, nodeSeven);

//   binaryTree.PreorderTraverse(nodeOne);
//   console.log(" ");
//   binaryTree.InorderTraverse(nodeOne);
//   console.log(" ");
//   binaryTree.PostorderTraverse(nodeOne);
// };

// init();
