
const movieTemplate = document.createElement("template");
movieTemplate.innerHTML = `
<style>
    @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css');
 </style>

<li class="media mb-3">
    <img src="" id="movieImg" onerror="this.src='https://via.placeholder.com/92x138';" class="mr-3 " >
    <div class="media-body">
        <h5 class="mt-0 mb-1">
            <span class="badge badge-primary"></span> 
           <span class="movieHash" id="">  </span>
        </h5>
        <p> <slot /></p>
        <p class="desc"> </p>
    </div>
</li>
`


import AbstractComponent from "./AbstractComponent";

export default class MovieComponent extends AbstractComponent {

    constructor() {
        super();
        this.shadowRoot.appendChild(movieTemplate.content.cloneNode(true));
        //this.readmore =  this.shadowRoot.querySelector('.movieHash');
        //elements.movieElement.readmore = this.readmore;
    


    }
}
window.customElements.define("app-movie", MovieComponent);