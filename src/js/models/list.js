<<<<<<< HEAD
import uniqId from 'uniqid';
export default class List{
    constructor(){
       this.items = [];
    };

    addItem(count,unit,ingredient){
        const item = {
            id : uniqId(),
            count , // equal to count : count ( es6 feature )
            unit ,
            ingredient
        };
        this.items.push(item);
        return item;
    };

    deleteItem(id){
        const index = this.items.findIndex(current => current.id === id );

        this.items.splice(index,1)

    };

    updateCount(id,newCount){
        this.items.find(current => current.id == id ).count = newCount;
    };

=======
import uniqId from 'uniqid';
export default class List{
    constructor(){
       this.items = [];
    };

    addItem(count,unit,ingredient){
        const item = {
            id : uniqId(),
            count , // equal to count : count ( es6 feature )
            unit ,
            ingredient
        };
        this.items.push(item);
        return item;
    };

    deleteItem(id){
        const index = this.items.findIndex(current => current.id === id );

        this.items.splice(index,1)

    };

    updateCount(id,newCount){
        this.items.find(current => current.id == id ).count = newCount;
    };

>>>>>>> d783a83d8419875895fd4b877b2af268b2fee8dd
}