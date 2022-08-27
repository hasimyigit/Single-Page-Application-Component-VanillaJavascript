import AbstractView from "./AbstractView.js"
import SearchComponent from '../components/searchComponent'
export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Movies"); 
         console.log("searchView new");
    }
    async afterGetHtml(){
       
       
     let html =  await this.getHtml();
     return html; 
    }
    async getHtml(){
        
       return `
        
     <app-search></app-search>
     
    `;
    }
  
}