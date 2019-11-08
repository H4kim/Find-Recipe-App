<<<<<<< HEAD
import axios from "axios";
import {key} from '../config';


export default class getData{
    constructor(query){
        this.query = query;
    }
    async getResults(){
          
        try{
          let result = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
          this.recipes = result.data.recipes;
            
        }catch(error){
            alert(error)
        }

    }
}



=======
import axios from "axios";
import {key} from '../config';


export default class getData{
    constructor(query){
        this.query = query;
    }
    async getResults(){
          
        try{
          let result = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
          this.recipes = result.data.recipes;
            
        }catch(error){
            alert(error)
        }

    }
}



>>>>>>> d783a83d8419875895fd4b877b2af268b2fee8dd
