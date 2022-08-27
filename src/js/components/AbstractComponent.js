export default class AbstractComponent extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode:"open"});
        this.templateTag = document.createElement('template');
        
    }
    async fetchData(url) {
        return await fetch(url)
            .then(function(response) {
              
                return response.text();
                
            });
    }

    

  

 


    
}