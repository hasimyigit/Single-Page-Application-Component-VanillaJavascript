import Home from './views/Home'
import MovieDetail from './views/MovieDetail';
import Search from './views/Search'
import {Render} from './Render'
export const navigateTo = async (url) => {
    if(location.href!==url){
        history.pushState(null, null, url);
        await router();  
    }
   
};

export const router = async () => {
    const routes = [
        //Classı Verdik (ayrıntılı bakmak  lazım sonra)
        {
            path: "/",
            view: Home
        },
        {
            path: "/search",
            view: Search
        },
        {
            path: "/moviedetail",
            view: MovieDetail
        }
     

    ];

    //routes map ile dönerek  yeni bir obje dizisi oluşturuyoruz isMatch: location.pathname === route.path(true yada false geliyor)
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    
    
    let match = potentialMatches.find(potentialMatche => potentialMatche.isMatch);


    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }
    let view;
    //Seçilen Home Eşitse Singleton Pattern
    if(match.route === routes[0]){
        view = Render.HomeSingleton();
    }
    else{
        view = new match.route.view();
    }
     
    document.querySelector('#app-root').innerHTML = await view.afterGetHtml();

   
    
};
