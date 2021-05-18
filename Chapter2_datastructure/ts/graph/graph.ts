class graph {
    private x: number;
    private y: number;
    constructor(x : number, y : number){
        this.x = x;
        this.y = y;
    }

    getX(): number {
        return this.x;
    }

    getY() : number{
        return this.y;
    }

    makeGraph(): void{
        const arr: number[] = [];
        for(let i=0; i < this.x; i++){
            arr[i] = 1;
        }

    }
}

function init(){
    const newGraph = new graph(3, 5);
    console.log(newGraph.getX());
    console.log(newGraph.getY());
}

init();