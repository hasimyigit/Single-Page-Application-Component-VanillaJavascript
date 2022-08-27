import AbstractView from "./AbstractView.js"

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Movie Detail");
    }
    async afterGetHtml(){
       
       
        let html =  await this.getHtml();
        return html; 
       }
    async getHtml(){
        return `
        
        <app-detail-movie></app-detail-movie>
    `;
    }
}