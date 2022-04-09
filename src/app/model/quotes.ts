export class Quotes {
    showForm :boolean
    constructor(public quote:string, public author:string, public publisher:string, public upCounter: number,  public downCounter:number ){
        this.showForm = false;
    }
}
