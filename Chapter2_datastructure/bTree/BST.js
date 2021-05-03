import { BTreeNode, BTree } from "./bTree.js";

class BST extends BTree {
  constructor(data) {
    super(new BTreeNode(data));
  }

  get root() {
    return this._root;
  }

  set root(node) {
    this._root = node;
  }

  insert(data) {
    // 루트노드부터 타고 내려 올 것임.
    let childNode = this.root;
    let parentNode = null;
    const newNode = new BTreeNode(data);

    // childNode와 parentNode의 위치를 지정해줌.
    while (childNode !== null) {
      // 데이터의 중복을 허용하지 않음.
      if (data === super.getData(childNode)) {
        return;
      }
      parentNode = childNode;
      if (super.getData(childNode) > data) {
        childNode = super.getLeftSubTree(childNode);
      } else {
        childNode = super.getRightSubTree(childNode);
      }
    }

    // parentNode가 루트노드가 아니면
    if (parentNode !== null) {
      // 부모 트리보다 자식 트리가 작으면
      if (data < super.getData(parentNode)) {
        super.makeLeftSubTree(parentNode, newNode);
      } else {
        super.makeRightSubTree(parentNode, newNode);
      }
      // parentNode가 루트노드이면
    } else {
      this.root = newNode;
    }
  }

  search(rootNode, target) {
    const childNode = rootNode;
    const cmpData = super.getData(rootNode);

    while (childNode !== null) {
      if (target === cmpData) {
        return childNode;
      } else if (target < cmpData) {
        childNode = super.getLeftSubTree(childNode);
      } else {
        childNode = super.getRightSubTree(childNode);
      }
    }

    return null;
  }

  delete(node) {
    const deleteNode = this.root;
    let deleteChildNode;

    // 삭제할 노드가 리프 노드일 경우.
    if (
      super.getLeftSubTree(node) === null &&
      super.getLeftSubTree(node) === null
    ) {
      if (super.getLeftSubTree(parentNode) === deleteNode) {
        RemoveLeftSubTree(parentNode);
      } else {
        RemoveRightSubTree(parentNode);
      }
      // 삭제할 노드의 자식노드가 하나 뿐이라면
    } else if (
      super.getLeftSubTree(node) !== null ||
      super.getLeftSubTree(node) !== null
    ) {
      if (super.getLeftSubTree(node) !== null) {
        deleteChildNode = super.getLeftSubTree(deleteNode);
      } else {
        deleteChildNode = super.getRightSubTree(deleteNode);
      }

      if (super.getLeftSubTree(parentNode) === deleteNode) {
        super.makeLeftSubTree(parentNode, deleteChildNode);
      } else {
        super.makeRightSubTree(parentNode, deleteChildNode);
      }
      // 삭제할 노드의 자식노드가 둘일 경우
    } else {
    }
  }
}

function init() {
  const bst = new BST(3);
  bst.insert(1);
  bst.insert(4);
  bst.insert(5);
  bst.insert(6);

  console.log("Preorder");
  bst.PreorderTraverse(bst.root);
  console.log("\nInorder");
  bst.InorderTraverse(bst.root);
  console.log("\nPostOrder");
  bst.PostorderTraverse(bst.root);
}

init();
