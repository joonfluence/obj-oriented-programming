class Queue<T> {
    protected data: Array<T> = [];
    push(item: T){
        this.data.push(item);
    }
    pop(): T | undefined {
        return this.data.shift();
    }
}

const numberQueue = new Queue<number>();

numberQueue.push(0);
numberQueue.push(1);
// numberQueue.push('1'); compile 불가하다.

console.log(numberQueue.pop());
console.log(numberQueue.pop());

const stringQueue = new Queue<string>();

stringQueue.push('1');
stringQueue.push('2');
stringQueue.push('3');
// stringQueue.push(1); complie 불가하다. 
