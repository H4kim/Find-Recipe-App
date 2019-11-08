<<<<<<< HEAD
import {elements} from './base'
export  function renderItem(item) {
    const markup = `
     <li class="shopping__item" data-id="${item.id}">
        <div class="shopping__count">
            <input type="number" value="${item.count}" step="${item.count}" class="shopping__count__value">
            <p>${item.unit}</p>
        </div>
        <p class="shopping__description">${item.ingredient}</p>
        <button class="shopping__delete btn-tiny">
            <svg>
                <use href="img/icons.svg#icon-circle-with-cross"></use>
            </svg>
        </button>
    </li> `

    elements.shoppinglist.insertAdjacentHTML('afterbegin',markup)

}

export function deleteItem(id){
    
    const item = document.querySelector(`[data-id="${id}"]`)
    item.parentElement.removeChild(item)
=======
import {elements} from './base'
export  function renderItem(item) {
    const markup = `
     <li class="shopping__item" data-id="${item.id}">
        <div class="shopping__count">
            <input type="number" value="${item.count}" step="${item.count}" class="shopping__count__value">
            <p>${item.unit}</p>
        </div>
        <p class="shopping__description">${item.ingredient}</p>
        <button class="shopping__delete btn-tiny">
            <svg>
                <use href="img/icons.svg#icon-circle-with-cross"></use>
            </svg>
        </button>
    </li> `

    elements.shoppinglist.insertAdjacentHTML('afterbegin',markup)

}

export function deleteItem(id){
    
    const item = document.querySelector(`[data-id="${id}"]`)
    item.parentElement.removeChild(item)
>>>>>>> d783a83d8419875895fd4b877b2af268b2fee8dd
}