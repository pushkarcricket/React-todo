import { createStore } from "redux";


export const reducer=(state=10, action)=>{
    switch(action.type){
        case 'INC' : return state+1;
        case 'DEc' : return state-1;
         default :return state;
    }
}

export let store=createStore(reducer)


//ui se connnent karme ke liye use selctor use karte 