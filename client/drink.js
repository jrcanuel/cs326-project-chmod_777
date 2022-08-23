//Drink class, potentially to be used to create drink objects for better communication between menu & calc.

class Drink {
    constructor(title, ingredients, pic) {
        this.title = title;
        this.ingredients = ingredients //array with ingredients; simpler to search for index than key of object imo, and no value needed other than title.
        this.pic = pic;
    }
}

export {Drink}