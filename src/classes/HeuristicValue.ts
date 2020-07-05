export default class HeuristicValue {
    g: number;
    h: number;
    f: number;

    constructor(g: number, h: number, f: number){
        this.g = g;
        this.h = h;
        this.f = f;
    }
}