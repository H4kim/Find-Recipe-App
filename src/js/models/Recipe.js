<<<<<<< HEAD
import axios from "axios";
import {key} from '../config';


export default  class Recipe { 
    constructor(id){
        this.id = id ;
    }
    
    async getRecipe() {
        
        try {
            const recip = await axios(`https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            this.title = recip.data.recipe.title;
            this.author = recip.data.recipe.publisher;
            this.img = recip.data.recipe.image_url;
            this.url = recip.data.recipe.source_url;
            this.ingredients = recip.data.recipe.ingredients; 

        }catch{
            alert('Somthing was wrong with the search !!')
        }

    }

    calcTime() {
        const ingr =  this.ingredients.length
        this.cookingTime =  Math.round((ingr / 3 )*15);
    }

    calcServing(){
        this.serving = 4
    }

    
    

    parseIngredients(){
        const longIngredients = ['tablespoons','tablespoon','ounces','ounce','teaspoons','teaspoon','cups' ,'pounds'];
        const shortIngredients = ['tbsp','tbsp','oz','oz','tsp','tsp','cup','pound'];
        const unit = [...shortIngredients , 'g','kg']
        const newIngredients = this.ingredients.map((current ) => {
            //1 replace longingredients by shortingredients 
            let ingredient = current.toLowerCase();
            longIngredients.forEach((cur,i) => {
                ingredient = ingredient.replace(cur , shortIngredients[i])
            });
            //remove parentheses 
            ingredient = ingredient.replace(/ *\([^)]*\) */g, " ") ;
            //parse ingredient to count , unit , ingredient
            let arrIng = ingredient.split(/\s|\-/);
            let unitindex = arrIng.findIndex(currr => unit.includes(currr));
            
            let objIngredient = {}; // object contain : count , unit , ingredient
            if(unitindex > -1  ){ //there  is a unit 
                let arrCount =arrIng.slice(0,unitindex);
                let count;
                
                if(arrCount.length == 1) {
                    count = eval(arrIng[0].replace('-','+'));
                }else  {
                    count = eval(arrIng.slice(0,unitindex).join("+"));
                }
                
                objIngredient = {
                    count :  count,
                    unit : arrIng[unitindex],
                    ingredient : arrIng.slice(unitindex+1).join(" "),
                   
                }
            } else if(parseInt(arrIng[0])){  // no unit but there is a count
               
                objIngredient = {
                    count : parseInt(arrIng[0]) ,
                    unit : '',
                    ingredient : arrIng.slice(1).join(' ')
                }
            }else if(unitindex == -1 ){  // no unit and no count in the ingredient  
              
                objIngredient = {
                    count : 1 ,
                    unit : '',
                    ingredient : ingredient
                }
            }


            return objIngredient ; 
        });
        this.ingredients = newIngredients;

    }

    updateServing(type) {
        //new Serving
        const newServing = type ==='dec' ? this.serving - 1 : this.serving +1
        // update ingredients count 
        this.ingredients.forEach(current => {
            current.count =  current.count * newServing  / this.serving
        })
        this.serving = newServing;
     }

    
   
}

=======
import axios from "axios";
import {key} from '../config';


export default  class Recipe { 
    constructor(id){
        this.id = id ;
    }
    
    async getRecipe() {
        
        try {
            const recip = await axios(`https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            this.title = recip.data.recipe.title;
            this.author = recip.data.recipe.publisher;
            this.img = recip.data.recipe.image_url;
            this.url = recip.data.recipe.source_url;
            this.ingredients = recip.data.recipe.ingredients; 

        }catch{
            alert('Somthing was wrong with the search !!')
        }

    }

    calcTime() {
        const ingr =  this.ingredients.length
        this.cookingTime =  Math.round((ingr / 3 )*15);
    }

    calcServing(){
        this.serving = 4
    }

    
    

    parseIngredients(){
        const longIngredients = ['tablespoons','tablespoon','ounces','ounce','teaspoons','teaspoon','cups' ,'pounds'];
        const shortIngredients = ['tbsp','tbsp','oz','oz','tsp','tsp','cup','pound'];
        const unit = [...shortIngredients , 'g','kg']
        const newIngredients = this.ingredients.map((current ) => {
            //1 replace longingredients by shortingredients 
            let ingredient = current.toLowerCase();
            longIngredients.forEach((cur,i) => {
                ingredient = ingredient.replace(cur , shortIngredients[i])
            });
            //remove parentheses 
            ingredient = ingredient.replace(/ *\([^)]*\) */g, " ") ;
            //parse ingredient to count , unit , ingredient
            let arrIng = ingredient.split(/\s|\-/);
            let unitindex = arrIng.findIndex(currr => unit.includes(currr));
            
            let objIngredient = {}; // object contain : count , unit , ingredient
            if(unitindex > -1  ){ //there  is a unit 
                let arrCount =arrIng.slice(0,unitindex);
                let count;
                
                if(arrCount.length == 1) {
                    count = eval(arrIng[0].replace('-','+'));
                }else  {
                    count = eval(arrIng.slice(0,unitindex).join("+"));
                }
                
                objIngredient = {
                    count :  count,
                    unit : arrIng[unitindex],
                    ingredient : arrIng.slice(unitindex+1).join(" "),
                   
                }
            } else if(parseInt(arrIng[0])){  // no unit but there is a count
               
                objIngredient = {
                    count : parseInt(arrIng[0]) ,
                    unit : '',
                    ingredient : arrIng.slice(1).join(' ')
                }
            }else if(unitindex == -1 ){  // no unit and no count in the ingredient  
              
                objIngredient = {
                    count : 1 ,
                    unit : '',
                    ingredient : ingredient
                }
            }


            return objIngredient ; 
        });
        this.ingredients = newIngredients;

    }

    updateServing(type) {
        //new Serving
        const newServing = type ==='dec' ? this.serving - 1 : this.serving +1
        // update ingredients count 
        this.ingredients.forEach(current => {
            current.count =  current.count * newServing  / this.serving
        })
        this.serving = newServing;
     }

    
   
}

>>>>>>> d783a83d8419875895fd4b877b2af268b2fee8dd
