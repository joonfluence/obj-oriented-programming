import Stack from "../stack/stack.js";
import { BTree } from "./bTree.js";
import { BTreeNode } from "./bTree.js";

// 참조 할 것 : https://www.sanfoundry.com/java-program-implement-expression-tree-algorithm/

class ExpressionTree extends BTree {
  constructor(node) {
    super(node);
  }

  //  후위표기법 수식을 문자열의 형태로 입력 받고, 이를 기반으로 수식 트리를 구성하고 그 수식 트리의 주소 값, 정확히 말해서 수식 트리의 루트 노드의 주소 값을 반환하는 함수.

  // 계산하는 함수

  setData(bt, data) {
    bt.data = data;
    return bt.data;
  }

  _isDigit = (ch) => ch >= "0" && ch <= "9";

  _isOperator = (ch) => ch === "+" || ch === "-" || ch === "*" || ch === "/";

  MakeExpTree(exp) {
    const stack = new Stack();
    const bt = new BTreeNode();

    console.log(this._isDigit(exp[0]));
    console.log(this._isOperator(exp[0]));

    const strlen = exp.length;
    for (let i = 0; i < strlen; i++) {
      if (this._isDigit(exp[i])) {
        // 피연산자(숫자)이면
        // console.log(Number(exp[i]));
        console.log("이거다 :", this.setData(bt, Number(exp[i])));
        console.log(bt);
        // 연산자이면
      } else if (this._isOperator(exp[i])) {
        // super.makeRightSubTree(bt, stack.pop());
        // super.makeLeftSubTree(bt, stack.pop());
        console.log("이거다2 :", this.setData(bt, exp[i]));
        console.log(bt);
      }
      console.log("이거다3", bt);
      stack.push(bt);
    }
    console.log(stack, ": stack");
    return stack;
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
  const btNode = et.MakeExpTree(exp);

  console.log(btNode, ": btNode");

  // et.ShowPrefixTypeExp(btNode);
  // et.ShowInfixTypeExp(btNode);
  // et.ShowPostfixTypeExp(btNode);
};

init();
