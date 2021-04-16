import Stack from "../stack/stack.js";
import { BTree } from "./bTree.js";
import { BTreeNode } from "./bTree.js";

class ExpressionTree extends BTree {
  constructor(node) {
    super(node);
  }

  // 계산하는 함수

  setData(bt, data) {
    bt.data = data;
    return bt.data;
  }

  _isDigit = (ch) => ch >= "0" && ch <= "9";

  _isOperator = (ch) => ch === "+" || ch === "-" || ch === "*" || ch === "/";

  // MakeExpTree : 후위표기법 수식을 문자열의 형태로 입력 받고, 이를 기반으로 수식 트리를 구성하고 그 수식 트리의 주소 값, 정확히 말해서 수식 트리의 루트 노드의 주소 값을 반환한다.

  MakeExpTree(exp) {
    const stack = new Stack();
    const strlen = exp.length;

    for (let i = 0; i < strlen; i++) {
      const bt = new BTreeNode();
      if (this._isDigit(exp[i])) {
        // 피연산자(숫자)이면
        this.setData(bt, Number(exp[i]));
        // 연산자이면 피연산자(Node)를 Pop하고 이들을 subTree로 만든다. 그런후, 다시 스택에 넣어준다.
      } else if (this._isOperator(exp[i])) {
        super.makeRightSubTree(bt, stack.pop());
        super.makeLeftSubTree(bt, stack.pop());
        this.setData(bt, exp[i]);
      }
      stack.push(bt);
    }

    // 여기서 pop해줌으로써, 스택에는 아무런 값도 남아있지 않게 된다.
    return stack.pop();
  }

  ShowPrefixTypeExp(bt) {
    super.PreorderTraverse(bt);
  }

  ShowInfixTypeExp(bt) {
    super.InorderTraverse(bt);
  }

  ShowPostfixTypeExp(bt) {
    super.PostorderTraverse(bt);
  }
}

const init = () => {
  const exp = "12+7*";
  const et = new ExpressionTree();
  const topNode = et.MakeExpTree(exp);

  console.log("topNode", topNode);

  et.ShowPrefixTypeExp(topNode);
  console.log(" ");
  et.ShowInfixTypeExp(topNode);
  console.log(" ");
  et.ShowPostfixTypeExp(topNode);
};

init();
