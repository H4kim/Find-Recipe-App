<<<<<<< HEAD

//*All reusable code in different modules */

export  const elements = {
    searchInput : document.querySelector('.search__field'),
    searchForm : document.querySelector('.search'),
    recipesList : document.querySelector('.results__list'),
    results :  document.querySelector('.results'),
    resultPages : document.querySelector('.results__pages'),
    recipe : document.querySelector('.recipe'), 
    shoppinglist : document.querySelector('.shopping__list'),
    favList : document.querySelector('.likes__list')
}


export function renderLoader(parent){
    const markup =`
        <div class="loader">
            <svg>
                <use href="img/icons.svg#icon-cw"> </use>
            </svg>
        </div> `

    parent.insertAdjacentHTML('afterBegin' , markup )

}

export function clearLoader(){
    const loader = document.querySelector('.loader');
    if(loader){
        loader.parentNode.removeChild(loader);
    }
=======

//*All reusable code in different modules */

export  const elements = {
    searchInput : document.querySelector('.search__field'),
    searchForm : document.querySelector('.search'),
    recipesList : document.querySelector('.results__list'),
    results :  document.querySelector('.results'),
    resultPages : document.querySelector('.results__pages'),
    recipe : document.querySelector('.recipe'), 
    shoppinglist : document.querySelector('.shopping__list'),
    favList : document.querySelector('.likes__list')
}


export function renderLoader(parent){
    const markup =`
        <div class="loader">
            <svg>
                <use href="img/icons.svg#icon-cw"> </use>
            </svg>
        </div> `

    parent.insertAdjacentHTML('afterBegin' , markup )

}

export function clearLoader(){
    const loader = document.querySelector('.loader');
    if(loader){
        loader.parentNode.removeChild(loader);
    }
>>>>>>> d783a83d8419875895fd4b877b2af268b2fee8dd
}