<<<<<<< HEAD
import {elements} from './base'
export const addFavourite = (favouriteItem) => {

    const markup =
    `
    <li>
        <a class="likes__link" href="#${favouriteItem.id}">
            <figure class="likes__fig">
                <img src="${favouriteItem.img}" alt="${favouriteItem.title}">
            </figure>
            <div class="likes__data">
                <h4 class="likes__name">${favouriteItem.title}</h4>
                <p class="likes__author">${favouriteItem.author}</p>
            </div>
        </a>
    </li>
    ` 

    elements.favList.insertAdjacentHTML('beforeEnd',markup)
}

export const deleteFavourite = (id) => {
    document.querySelector(`.likes__link[href="#${id}"]`).parentNode.remove()
}

export const toggelikeBtn = (isLiked) => { // img/icons.svg#icon-heart-outlined
    const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';
    document.querySelector('.recipe__love use').setAttribute('href',`img/icons.svg#${iconString}`)
=======
import {elements} from './base'
export const addFavourite = (favouriteItem) => {

    const markup =
    `
    <li>
        <a class="likes__link" href="#${favouriteItem.id}">
            <figure class="likes__fig">
                <img src="${favouriteItem.img}" alt="${favouriteItem.title}">
            </figure>
            <div class="likes__data">
                <h4 class="likes__name">${favouriteItem.title}</h4>
                <p class="likes__author">${favouriteItem.author}</p>
            </div>
        </a>
    </li>
    ` 

    elements.favList.insertAdjacentHTML('beforeEnd',markup)
}

export const deleteFavourite = (id) => {
    document.querySelector(`.likes__link[href="#${id}"]`).parentNode.remove()
}

export const toggelikeBtn = (isLiked) => { // img/icons.svg#icon-heart-outlined
    const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';
    document.querySelector('.recipe__love use').setAttribute('href',`img/icons.svg#${iconString}`)
>>>>>>> d783a83d8419875895fd4b877b2af268b2fee8dd
}