<<<<<<< HEAD
import {elements} from './base';
export  const getInput = () =>  elements.searchInput.value ; 

export const hilightSelected = (id) => { 
    document.querySelectorAll('.results__link').forEach(current => current.classList.remove('results__link--active'))
    document.querySelector(`a[href="#${id}"]`).classList.add('results__link--active');
}

function renderRecipe(recipe){
    
    adjustTitle(recipe);
    const markup = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="Test">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${recipe.title}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>`

elements.recipesList.insertAdjacentHTML('beforeEnd',markup);
}


// outside function for (RenderButton)
const createButton = (page,type) => `    
        <button class="btn-inline results__btn--${type}" data-goto="${type === 'prev' ? page-1 : page+1 }">
        <span>Page ${type === 'prev' ? page-1 : page+1 }</span>
            <svg class="search__icon">
                <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left': 'right' }"></use>
            </svg>
        </button>`


// render Button 
function renderButton(page,numResults,resPerPage){
    const pages = Math.ceil(numResults / resPerPage);
    let button ;
    if(page === 1 && pages > 1){
        // next button 
        button = createButton(page,'next')
    }else if (page < pages){
        // both button
        button = `${createButton(page,'next')} ${ button = createButton(page,'prev')}`
    }else if(page = pages){
        // previous button
        button = createButton(page,'prev')

    }
    elements.resultPages.insertAdjacentHTML("afterbegin",button)
}


// Display the recipes ( 10 per page)
export const displayRecipes = (recipesArray,page=1,resPerPage=10) =>{
    let start = ( page -1 ) * resPerPage;
    let end = page * resPerPage ;

    recipesArray.slice(start,end).forEach(renderRecipe);

    renderButton(page,recipesArray.length,resPerPage)
}


//clear previous result 
export function clearResults(){
    elements.recipesList.innerHTML ="";
    elements.resultPages.innerHTML = "";
}


//adjust title
function adjustTitle(recipe){

    if(recipe.title.length > 22) { 
        recipe.title = `${recipe.title.slice(0,20)} ...` ;
    }
    
   
=======
import {elements} from './base';
export  const getInput = () =>  elements.searchInput.value ; 

export const hilightSelected = (id) => { 
    document.querySelectorAll('.results__link').forEach(current => current.classList.remove('results__link--active'))
    document.querySelector(`a[href="#${id}"]`).classList.add('results__link--active');
}

function renderRecipe(recipe){
    
    adjustTitle(recipe);
    const markup = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="Test">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${recipe.title}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>`

elements.recipesList.insertAdjacentHTML('beforeEnd',markup);
}


// outside function for (RenderButton)
const createButton = (page,type) => `    
        <button class="btn-inline results__btn--${type}" data-goto="${type === 'prev' ? page-1 : page+1 }">
        <span>Page ${type === 'prev' ? page-1 : page+1 }</span>
            <svg class="search__icon">
                <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left': 'right' }"></use>
            </svg>
        </button>`


// render Button 
function renderButton(page,numResults,resPerPage){
    const pages = Math.ceil(numResults / resPerPage);
    let button ;
    if(page === 1 && pages > 1){
        // next button 
        button = createButton(page,'next')
    }else if (page < pages){
        // both button
        button = `${createButton(page,'next')} ${ button = createButton(page,'prev')}`
    }else if(page = pages){
        // previous button
        button = createButton(page,'prev')

    }
    elements.resultPages.insertAdjacentHTML("afterbegin",button)
}


// Display the recipes ( 10 per page)
export const displayRecipes = (recipesArray,page=1,resPerPage=10) =>{
    let start = ( page -1 ) * resPerPage;
    let end = page * resPerPage ;

    recipesArray.slice(start,end).forEach(renderRecipe);

    renderButton(page,recipesArray.length,resPerPage)
}


//clear previous result 
export function clearResults(){
    elements.recipesList.innerHTML ="";
    elements.resultPages.innerHTML = "";
}


//adjust title
function adjustTitle(recipe){

    if(recipe.title.length > 22) { 
        recipe.title = `${recipe.title.slice(0,20)} ...` ;
    }
    
   
>>>>>>> d783a83d8419875895fd4b877b2af268b2fee8dd
}