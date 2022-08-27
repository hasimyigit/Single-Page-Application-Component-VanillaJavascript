const searchTemplate = document.createElement("template");
searchTemplate.innerHTML = `
<style>
    @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css');
 </style>
 <div class="container mt-3">
    <div class="card ">
        <div class="card-body">
            <form id="form-search">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Type Keyword" name="keyword"
                        id="txt-keyword">
                    <div class="input-group-append">
                        <input type="submit" value="Submit" class="btn btn-outline-primary" id="btn-submit">
                    </div>
                </div>
            </form>
        </div>
        </div>
        <div id="movie-list-container" class="card mt-3 d-none">
        <div class="card-header text-center">
            <span id="movie-list-header"></span>
            
        </div>
        <div class="card-body">
            <ul class="list-unstyled" id="movie-list">

            </ul>
        </div>
    </div>
`
import AbstractComponent from "./AbstractComponent";
import {elements} from '../elements'
 import {searchController} from  '../controller/searchController'
export default class SearchComponent extends AbstractComponent {

    constructor() {
        super()
    
        //this.templateTag.innerHTML= await this.fetchData('./Components/searchComponent/searchComponent.html');
        this.shadowRoot.appendChild(searchTemplate.content.cloneNode(true));
        elements.txt_keyword = this.shadowRoot.querySelector('#txt-keyword');
        elements.form_search= this.shadowRoot.querySelector('#form-search')
        elements.movie_list = this.shadowRoot.querySelector('#movie-list')
        elements.movie_list_container = this.shadowRoot.querySelector('#movie-list-container');
       
    }
    async connectedCallback() {
        await searchController();
    }
}

window.customElements.define("app-search", SearchComponent);