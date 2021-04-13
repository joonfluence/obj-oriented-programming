// 1) 변수의 타입 지정
let lucky:string = "23";

// 2) 변수의 값 제한하기
type Style = 'bold' | 'italic';
let font: Style;
font = 'bold'

const person = {
    first: 'Jeff',
    last: 'Bolt'
}

// 3) 객체의 형식 제한하기
interface Person {
    first: string;
    last: string;
    [key: string]: any
}

// 4) 함수 매개변수/리턴값의 형식 제한하기
function pow(x: number, y: number) : void{
    Math.pow(x, y).toString();
}

pow(5, 10);

// 5) 배열에 형식 제한하기
const arr: Person[] = []
arr.push({first : "hi", last: "hello"});

let numArr: number[] = [];
numArr = [1, 2, 3]

// 6) 선택적인 매개변수 연결하기

type MyList = [number?, string?, boolean?];

// 7) Generics : class의 매개변수 형식 제한하기

class Observable<T> {
    constructor(public value: T){

    }
}

let x : Observable<number>;
let y : Observable<string>;
let z : Observable<object>;