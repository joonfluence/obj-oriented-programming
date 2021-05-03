import { BTreeNode, BTree } from "./bTree.js";

class BST extends BTree {
  constructor(data) {
    super(new BTreeNode(data));
  }

  insert(data) {
    // 루트노드부터 타고 내려 올 것임.
    let childNode = this.root;
    let parentNode = null;
    const newNode = new BTreeNode(data);

    // insert될 위치는 항상 leef node여야 한다.
    while (childNode !== null) {
      // 데이터의 중복을 허용하지 않음.
      if (data === super.getData(childNode)) {
        return;
      }
      // newNode의 parentNode가 됨.
      parentNode = childNode;
      // 루트노드(childNode)보다 입력 값이 작으면 왼쪽 subTree로 등록하고
      if (super.getData(childNode) > data) {
        childNode = super.getLeftSubTree(childNode);
      } else {
        //루트노드(childNode)보다 입력 값이 쿠면 오른쪽 subTree로 등록하고
        childNode = super.getRightSubTree(childNode);
      }
    }

    // parentNode가 루트노드가 아니면
    if (parentNode !== null) {
      // 부모 트리보다 자식 트리가 작으면
      if (data < super.getData(parentNode)) {
        super.makeLeftSubTree(parentNode, newNode);
      } else {
        // 부모 트리보다 자식 트리가 크면
        super.makeRightSubTree(parentNode, newNode);
      }
      // parentNode가 루트노드이면
    } else {
      this.root = newNode;
    }
  }

  search(rootNode, target) {
    let childNode = rootNode;
    let cmpData = super.getData(childNode);

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

  RemoveLeftSubTree(parentNode) {
    let delNode;

    if (parentNode !== null) {
      delNode = parentNode.left;
      parentNode.left = null;
    }

    return delNode;
  }

  RemoveRightSubTree(parentNode) {
    let delNode;

    if (parentNode !== null) {
      delNode = parentNode.right;
      parentNode.right = null;
    }

    return delNode;
  }

  delete(targetData) {
    let parentNode;
    let childNode = this.root;
    let deleteNode = childNode;

    while (childNode !== null) {
      // 데이터의 중복을 허용하지 않음.
      if (super.getData(childNode) === targetData) {
        break;
      }
      // deleteNode의 parentNode가 됨.
      parentNode = childNode;
      // 루트노드(childNode)보다 입력 값이 작으면 왼쪽 subTree로 등록하고
      if (super.getData(childNode) > targetData) {
        childNode = super.getLeftSubTree(childNode);
      } else {
        //루트노드(childNode)보다 입력 값이 쿠면 오른쪽 subTree로 등록하고
        childNode = super.getRightSubTree(childNode);
      }
    }

    // 삭제할 노드를 지정한 childNode를 delete 노드에 할당한다.
    deleteNode = childNode;

    // 1) 삭제할 노드가 리프 노드일 경우.
    if (
      super.getLeftSubTree(deleteNode) === null &&
      super.getRightSubTree(deleteNode) === null
    ) {
      if (super.getLeftSubTree(parentNode) === deleteNode) {
        // parentNode의 왼쪽 자식트리를 삭제한다.
        this.RemoveLeftSubTree(parentNode);
      } else {
        // parentNode의 오른쪽 자식트리를 삭제한다.
        this.RemoveRightSubTree(parentNode);
      }
      // 2) 삭제할 노드의 자식노드가 둘일 경우
    } else if (
      super.getLeftSubTree(deleteNode) !== null &&
      super.getRightSubTree(deleteNode) !== null
    ) {
      let minimumParentNode = deleteNode;
      // 일단, deleteNode를 RigthSubTree로 지정한다.
      let minimumNode = super.getRightSubTree(deleteNode);
      let delData;

      // 삭제노드의 왼쪽 자식 노드가 존재하면 그 값이 더 작은 값이 되므로 minimumNode를 수정해줘야 함.
      while (super.getLeftSubTree(minimumNode) !== null) {
        minimumParentNode = minimumNode;
        minimumNode = super.getLeftSubTree(minimumNode);
      }

      delData = super.getData(deleteNode);
      super.setData(deleteNode, super.getData(minimumNode));

      if (super.getLeftSubTree(minimumParentNode) === minimumNode) {
        super.makeLeftSubTree(
          minimumParentNode,
          super.getRightSubTree(minimumNode)
        );
      } else {
        super.makeRightSubTree(
          minimumParentNode,
          super.getRightSubTree(minimumNode)
        );
        deleteNode = minimumNode;
        super.setData(deleteNode, delData);
      }
      // 3) 삭제할 노드의 자식노드가 하나 뿐이라면.
    } else {
      if (super.getLeftSubTree(deleteNode) !== null) {
        //삭제 대상의 자식노드가 왼쪽에 있다면
        childNode = super.getLeftSubTree(deleteNode);
      } else {
        //삭제 대상의 자식노드가 오른쪽에 있다면
        childNode = super.getRightSubTree(deleteNode);
      }

      if (super.getLeftSubTree(parentNode) === deleteNode) {
        // 부모노드에 왼쪽 자식노드를 연결한다.
        super.makeLeftSubTree(parentNode, childNode);
      } else {
        // 부모노드에 오른쪽 자식노드를 연결한다.
        super.makeRightSubTree(parentNode, childNode);
      }
    }

    return deleteNode;
  }
}

function init() {
  const bst = new BST(5);
  bst.insert(2);
  bst.insert(7);
  bst.insert(1);
  bst.insert(3);
  bst.insert(6);
  // bst.insert(8);

  console.log(bst.delete(7));

  console.log("Preorder");
  bst.PreorderTraverse(bst.root);
  console.log("\nInorder");
  bst.InorderTraverse(bst.root);
  console.log("\nPostOrder");
  bst.PostorderTraverse(bst.root);
}

init();
