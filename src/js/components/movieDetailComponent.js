const movieDetailTemplate = document.createElement("template");
movieDetailTemplate.innerHTML = `
<style>
    @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css');
 </style>

 <div class="row p-4">
 <div class="col-md-4">
 <img src="https://image.tmdb.org/t/p/w500/" onerror="this.src='https://via.placeholder.com/92x138';" class="mr-3 img-fluid" alt="">
</div>
<div class="col-md-8">
 <div>
     <h5 id="movie_original_title"></h5>
     <p id="movie_overview"></p>
     <p><small id="movie_vote_average" class="badge badge-primary"></small></p>
     <hr>

 </div>
</div>   
    </div>

`

import AbstractComponent from "./AbstractComponent";
import {State} from '../State'
export default class MovieDetailComponent extends AbstractComponent {

    constructor() {
        super();
        console.log(State.Movie);
        console.log("new Detail Comp")
        this.shadowRoot.appendChild(movieDetailTemplate.content.cloneNode(true));
        
            if(State.isMovie === true){
                this.shadowRoot.querySelector('.img-fluid').src = "https://image.tmdb.org/t/p/w500/"+State.Movie.data.poster_path;
                this.shadowRoot.querySelector('#movie_original_title').textContent =State.Movie.data.original_title;
                this.shadowRoot.querySelector('#movie_overview').textContent = State.Movie.data.overview;
                this.shadowRoot.querySelector('#movie_vote_average').textContent = State.Movie.data.vote_average;
            }else{
                this.shadowRoot.querySelector('.row').innerHTML = "<h1>Not selected Movie</h1>"
            }
                console.log(State.isMovie)
           
                //
           
       
            
       
          
       

    }
     connectedCallback() {
        
    }
}
window.customElements.define("app-detail-movie", MovieDetailComponent);