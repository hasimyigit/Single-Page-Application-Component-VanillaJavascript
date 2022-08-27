import AbstractView from "./AbstractView.js"

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Home");
        console.log('View Home New')
    }
    async afterGetHtml(){
       
       
        let html =  await this.getHtml();
        return html; 
       }
    async getHtml(){
        return `
        <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">Home Page</h1>
         
        </div>
      </div>
        

    `;
    }
}