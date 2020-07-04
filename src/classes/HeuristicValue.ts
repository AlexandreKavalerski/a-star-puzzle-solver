export default class HeuristicValue {
    g: number;
    h: number;

    constructor(g: number, h: number){
        this.g = g;
        this.h = h;
    }

    get f(){
        return this.g + this.h;
    }
}