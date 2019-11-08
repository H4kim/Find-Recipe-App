<<<<<<< HEAD
import Search from "./models/Search";
import * as searchView from "./views/searchView";
import * as recipeView from "./views/recipeView";
import {elements , clearLoader , renderLoader} from "./views/base";
import Recipe from "./models/Recipe";
import List from './models/list';
import * as listView from "./views/listView"
import Favorite from "./models/likes";
import * as likesViews from './views/likesView'



/* Global state of the  app 
  - Search object 
  - Current recipie object 
  - Shopping list object 
  - liked recipes 
  */
const state = {};


//****** SEARCH CONTROLLER ****** (Search.js , searchView.js)

const controleSearch = async ()=> {
  // 1 - get the query from UI (views) 
  let query = searchView.getInput();
  if(query){
    //clean the input field
    elements.searchInput.value = "";    
    //2 - new search  object 
    state.search =  new Search(query);
    //3 - prepare UI to next result 
    searchView.clearResults()
    renderLoader(elements.results); 
    //4 - Search for recepies 
    await state.search.getResults();
    //5 - render the recepies in the UI
    clearLoader();
    searchView.displayRecipes(state.search.recipes)
  }
  
};

//EVENT listener for the search button
elements.searchForm.addEventListener('submit' , (event) => {
  event.preventDefault();
  controleSearch();
})

// Event Listener for pages button
elements.resultPages.addEventListener('click' , event => {
  const button = parseInt(event.target.closest('button').dataset.goto); 
  searchView.clearResults();
  searchView.displayRecipes(state.search.recipes , button , 10)

})


//****** RECIPE CONTROLLER ****** ( recipe.js , recipeView.js)

const recipeController = async () => {
  //get the ID fromZthe URL (hash)
  const id = window.location.hash.replace('#','');
  if (id){
    //prepare the UI to display current recipe
    elements.recipe.innerHTML = '';
    renderLoader(elements.recipe);
    if(state.search) searchView.hilightSelected(id);
    //create new recipe object 
    state.recipe = new Recipe(id);
    try{
      //call the  functions in the object to initialize the properies 
      await state.recipe.getRecipe();
      clearLoader();
      state.recipe.calcTime();
      state.recipe.calcServing();
      state.recipe.parseIngredients();
      // render the recipe to the UI 
      
      recipeView.renderRecipe(state.recipe,state.favourite.isInFavourite(id));
      
    }catch{
      alert("Error while processing the recipe !! ")
    
    }
  }
}

// Event Listener for 'on Hash Change and on load all in one "
['hashchange' , 'load'].forEach(event => {
  window.addEventListener(event,recipeController);
})


//****** LIST CONTROLLER ****** 

const listController = () => {
  //create a list instance if it's not created
 if(!state.list) state.list = new List()

 state.recipe.ingredients.forEach(current => {
   const items = state.list.addItem(current.count,current.unit,current.ingredient);
   listView.renderItem(items)

 })

}


//handle delete and update shopping list
  elements.shoppinglist.addEventListener('click', e => {
    const id = e.target.closest('li').dataset.id;
    //handle delete item
  if(e.target.matches('.shopping__delete , .shopping__delete * ')){
    state.list.deleteItem(id)
    listView.deleteItem(id)
    console.log(state.list)
  }
  //handle update count 
  if(e.target.matches('.shopping__count__value')){
    const count = parseFloat(e.target.value);
    state.list.updateCount(id,count)
  }
})



//****** Favourite CONTROLLER ****** 
const favouriteController = () => {
  if(!state.favourite) state.favourite = new Favorite();
  const id = state.recipe.id;
  // if the recipe is already in favourite or not 
  if(!state.favourite.isInFavourite(id)){
    //add the like to the state.
    const addLike = state.favourite.addFavourite(state.recipe.id,state.recipe.title,state.recipe.author,state.recipe.img)    
    //toggle the heart 
    likesViews.toggelikeBtn(true)
    //add the like to the UI
    likesViews.addFavourite(addLike)
    
  }else {
    //remove the like to the state.
    state.favourite.deleteFavourite(id)
    //toggle the heart 
    likesViews.toggelikeBtn(false)
    //remove the like to the UI
    likesViews.deleteFavourite(id)
  
  }
  
}

// set the local storage on load  
window.addEventListener('load', ()=> {
  state.favourite = new Favorite();
  state.favourite.getLocalData();
  state.favourite.favRecipe.forEach(current => {
    likesViews.addFavourite(current)
  })

});


//event listner for change serving + - 
elements.recipe.addEventListener('click', e => {
  

    if(e.target.matches('.btn-decrease, .btn-decrease *')){
      if(state.recipe.serving > 1 ){
      state.recipe.updateServing('dec')
      recipeView.updateServingIngredients(state.recipe)
      }
    } else if(e.target.matches('.btn-increase, .btn-increase *')){
      state.recipe.updateServing('inc');
      recipeView.updateServingIngredients(state.recipe)

    }
    
    //  call the listController : 
    if(e.target.matches('.recipe__btn--add, .recipe__btn--add *' )){
      listController();
    }

    //call favourite controller
    if(e.target.matches('.recipe__love, .recipe__love *')){
      favouriteController();
    }

  
})



=======
import Search from "./models/Search";
import * as searchView from "./views/searchView";
import * as recipeView from "./views/recipeView";
import {elements , clearLoader , renderLoader} from "./views/base";
import Recipe from "./models/Recipe";
import List from './models/list';
import * as listView from "./views/listView"
import Favorite from "./models/likes";
import * as likesViews from './views/likesView'



/* Global state of the  app 
  - Search object 
  - Current recipie object 
  - Shopping list object 
  - liked recipes 
  */
const state = {};


//****** SEARCH CONTROLLER ****** (Search.js , searchView.js)

const controleSearch = async ()=> {
  // 1 - get the query from UI (views) 
  let query = searchView.getInput();
  if(query){
    //clean the input field
    elements.searchInput.value = "";    
    //2 - new search  object 
    state.search =  new Search(query);
    //3 - prepare UI to next result 
    searchView.clearResults()
    renderLoader(elements.results); 
    //4 - Search for recepies 
    await state.search.getResults();
    //5 - render the recepies in the UI
    clearLoader();
    searchView.displayRecipes(state.search.recipes)
  }
  
};

//EVENT listener for the search button
elements.searchForm.addEventListener('submit' , (event) => {
  event.preventDefault();
  controleSearch();
})

// Event Listener for pages button
elements.resultPages.addEventListener('click' , event => {
  const button = parseInt(event.target.closest('button').dataset.goto); 
  searchView.clearResults();
  searchView.displayRecipes(state.search.recipes , button , 10)

})


//****** RECIPE CONTROLLER ****** ( recipe.js , recipeView.js)

const recipeController = async () => {
  //get the ID fromZthe URL (hash)
  const id = window.location.hash.replace('#','');
  if (id){
    //prepare the UI to display current recipe
    elements.recipe.innerHTML = '';
    renderLoader(elements.recipe);
    if(state.search) searchView.hilightSelected(id);
    //create new recipe object 
    state.recipe = new Recipe(id);
    try{
      //call the  functions in the object to initialize the properies 
      await state.recipe.getRecipe();
      clearLoader();
      state.recipe.calcTime();
      state.recipe.calcServing();
      state.recipe.parseIngredients();
      // render the recipe to the UI 
      
      recipeView.renderRecipe(state.recipe,state.favourite.isInFavourite(id));
      
    }catch{
      alert("Error while processing the recipe !! ")
    
    }
  }
}

// Event Listener for 'on Hash Change and on load all in one "
['hashchange' , 'load'].forEach(event => {
  window.addEventListener(event,recipeController);
})


//****** LIST CONTROLLER ****** 

const listController = () => {
  //create a list instance if it's not created
 if(!state.list) state.list = new List()

 state.recipe.ingredients.forEach(current => {
   const items = state.list.addItem(current.count,current.unit,current.ingredient);
   listView.renderItem(items)

 })

}


//handle delete and update shopping list
  elements.shoppinglist.addEventListener('click', e => {
    const id = e.target.closest('li').dataset.id;
    //handle delete item
  if(e.target.matches('.shopping__delete , .shopping__delete * ')){
    state.list.deleteItem(id)
    listView.deleteItem(id)
    console.log(state.list)
  }
  //handle update count 
  if(e.target.matches('.shopping__count__value')){
    const count = parseFloat(e.target.value);
    state.list.updateCount(id,count)
  }
})



//****** Favourite CONTROLLER ****** 
const favouriteController = () => {
  if(!state.favourite) state.favourite = new Favorite();
  const id = state.recipe.id;
  // if the recipe is already in favourite or not 
  if(!state.favourite.isInFavourite(id)){
    //add the like to the state.
    const addLike = state.favourite.addFavourite(state.recipe.id,state.recipe.title,state.recipe.author,state.recipe.img)    
    //toggle the heart 
    likesViews.toggelikeBtn(true)
    //add the like to the UI
    likesViews.addFavourite(addLike)
    
  }else {
    //remove the like to the state.
    state.favourite.deleteFavourite(id)
    //toggle the heart 
    likesViews.toggelikeBtn(false)
    //remove the like to the UI
    likesViews.deleteFavourite(id)
  
  }
  
}

// set the local storage on load  
window.addEventListener('load', ()=> {
  state.favourite = new Favorite();
  state.favourite.getLocalData();
  state.favourite.favRecipe.forEach(current => {
    likesViews.addFavourite(current)
  })

});


//event listner for change serving + - 
elements.recipe.addEventListener('click', e => {
  

    if(e.target.matches('.btn-decrease, .btn-decrease *')){
      if(state.recipe.serving > 1 ){
      state.recipe.updateServing('dec')
      recipeView.updateServingIngredients(state.recipe)
      }
    } else if(e.target.matches('.btn-increase, .btn-increase *')){
      state.recipe.updateServing('inc');
      recipeView.updateServingIngredients(state.recipe)

    }
    
    //  call the listController : 
    if(e.target.matches('.recipe__btn--add, .recipe__btn--add *' )){
      listController();
    }

    //call favourite controller
    if(e.target.matches('.recipe__love, .recipe__love *')){
      favouriteController();
    }

  
})



>>>>>>> d783a83d8419875895fd4b877b2af268b2fee8dd
