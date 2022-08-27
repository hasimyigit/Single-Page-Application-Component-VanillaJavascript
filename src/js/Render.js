import Home from "./views/Home";

let instance;
export const Render = {
    
    HomeSingleton: function(){
        if(!instance){
            instance = new Home();
        }
        return instance;
    }
};