import {
    navigateTo,
    router
} from './router'
import {
    elements
} from './elements'
import {State} from './State'

import MovieComponent from './components/movieComponent'
import MovieDetailComponent from './components/MovieDetailComponent'
import Movie from './models/Movie'
import {searchController} from './controller/searchController'



window.addEventListener("popstate",  async ()=>{
    await router();
});

document.addEventListener("DOMContentLoaded", async () => {
    console.log("Sayfa Yüklendi");

    await router();

    document.body.addEventListener("click", async e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            await navigateTo(e.target.href);
        }

       


    })

   

}) 

window.addEventListener('hashchange', (e)=>{
    e.preventDefault();
    console.log("hashchange");
});