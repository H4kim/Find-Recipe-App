<<<<<<< HEAD

export default class Favorite {
    constructor(){
        this.favRecipe =[];
    }

    addFavourite(id,title,author,img){
       const favItem = {
           id,
           title ,
           author,
           img,
       }
       this.favRecipe.push(favItem)
       //persist data in localstorage
       this.persistData();
       return favItem;
    }

    deleteFavourite(id){
        const index = this.favRecipe.findIndex(current =>  current.id == id)

        this.favRecipe.splice(index,1)
        //persist data in localstorage
        this.persistData()
    }

    isInFavourite(id){
        return this.favRecipe.findIndex(current => current.id == id) !== -1 //true if liked 
    }

    likesNumber(){
        return this.favRecipe.length;
    }

    persistData(){
        localStorage.setItem('likes', JSON.stringify(this.favRecipe))
    }

    getLocalData(){
        const storage = JSON.parse(localStorage.getItem('likes'));
        if(storage) this.favRecipe = storage;
    }


=======

export default class Favorite {
    constructor(){
        this.favRecipe =[];
    }

    addFavourite(id,title,author,img){
       const favItem = {
           id,
           title ,
           author,
           img,
       }
       this.favRecipe.push(favItem)
       //persist data in localstorage
       this.persistData();
       return favItem;
    }

    deleteFavourite(id){
        const index = this.favRecipe.findIndex(current =>  current.id == id)

        this.favRecipe.splice(index,1)
        //persist data in localstorage
        this.persistData()
    }

    isInFavourite(id){
        return this.favRecipe.findIndex(current => current.id == id) !== -1 //true if liked 
    }

    likesNumber(){
        return this.favRecipe.length;
    }

    persistData(){
        localStorage.setItem('likes', JSON.stringify(this.favRecipe))
    }

    getLocalData(){
        const storage = JSON.parse(localStorage.getItem('likes'));
        if(storage) this.favRecipe = storage;
    }


>>>>>>> d783a83d8419875895fd4b877b2af268b2fee8dd
}