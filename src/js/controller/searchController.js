import {elements} from '../elements'
import {State} from '../State'
import Search from '../models/Search'
import Movie from '../models/Movie'
import {
    navigateTo,
    
} from '../router'
export const  searchController = async () => {

  
    if(elements.form_search){
        elements.form_search.onsubmit = async (e)=>{
            e.preventDefault();
         
        
            

      
    }
    }
if(elements.txt_keyword)
    elements.txt_keyword.addEventListener('keyup',async (e)=>{
        State.Search = new Search(e.target.value);
        await State.Search.getResults();

        if(State.Search.data.results.length >  0){
            elements.movie_list.textContent = ' ';
        State.Search.data.results.forEach(movie => {
          
             let movieEl =  document.createElement('app-movie');
             movieEl.shadowRoot.querySelector('.desc').textContent = movie.overview;
             movieEl.shadowRoot.querySelector('#movieImg').src  ="https://image.tmdb.org/t/p/w92/"+movie.poster_path;
             movieEl.shadowRoot.querySelector('.movieHash').setAttribute("id", `${movie.id}`); 
             movieEl.shadowRoot.querySelector('.movieHash').textContent = movie.title;

             movieEl.shadowRoot.querySelector('.movieHash').addEventListener('click', async (e)=>{
               
             
                    State.Movie = new Movie(e.target.id);
                    State.isMovie=true;
                    await State.Movie.getMovie();
                    await navigateTo(`/moviedetail${e.target.id}`);
                    

                   
             })
             elements.movie_list.appendChild(movieEl);
        });
        
        elements.movie_list_container.classList.remove('d-none');

    }
    })
    //State'de Movie listesi varsa ol li > 
    if(State.Search){
    if(State.Search.data.results.length >  0){
        State.Search.data.results.forEach(movie => {
          
             let movieEl =  document.createElement('app-movie');
             movieEl.shadowRoot.querySelector('.desc').textContent = movie.overview;
             movieEl.shadowRoot.querySelector('#movieImg').src  ="https://image.tmdb.org/t/p/w92/"+movie.poster_path;
             movieEl.shadowRoot.querySelector('.movieHash').setAttribute("id", `${movie.id}`); 
             movieEl.shadowRoot.querySelector('.movieHash').textContent = movie.title;

             movieEl.shadowRoot.querySelector('.movieHash').addEventListener('click', async (e)=>{
               
             
                    State.Movie = new Movie(e.target.id);
                    
                    await State.Movie.getMovie();
                    await navigateTo(`/moviedetail${e.target.id}`);
                   
             })
             elements.movie_list.appendChild(movieEl);
        });
        
        elements.movie_list_container.classList.remove('d-none');

    }
}
}