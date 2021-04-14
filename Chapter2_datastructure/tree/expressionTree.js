import Stack from "../stack/stack";
import BTreeNode from "./bTree";

class ExpressionTree {
  //  후위표기법 수식을 문자열의 형태로 입력 받고, 이를 기반으로 수식 트리를 구성하고 그 수식 트리의 주소 값, 정확히 말해서 수식 트리의 루트 노드의 주소 값을 반환하는 함수.

  MakeExpTree(exp, bTreeNode) {
    const stack = new Stack();
    const bTree = new BTree();

    const strlen = exp.length;
    for (let i = 0; i < strlen; i++) {
      if (!isNaN(exp)) {
        // 값이 숫자이면
        bTreeNode.data = exp[i];
      } else {
        bTree.makeRightSubTree(stack.pop());
        bTree.makeLeftSubTree(stack.pop());
        bTreeNode.data = exp[i];
      }
      stack.push(bTreeNode);
    }
    return stack.pop();
  }

  ShowPrefixTypeExp(root) {
    BTree.PreorderTraverse(root);
  }

  ShowInfixTypeExp(root) {
    BTree.InorderTraverse(root);
  }

  ShowPostfixTypeExp(root) {
    BTree.PostorderTraverse(root);
  }
}

const init = () => {
  const exp = "12+7*";
  const expressionTree = ExpressionTree.MakeExpTree(exp);
  expressionTree.ShowInfixTypeExp();
};

init();
