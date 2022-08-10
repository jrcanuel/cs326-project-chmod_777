import { Drink } from './drink.js';

//Menu class, which is instantiated everytime the button is pressed

class Menu {
    constructor() {
        this.drinks = [ //todo: array of 20 popular drink objects
            new Drink("Dirty Shirley", ["sprite", "grenadine", "vodka"]),
            new Drink("Grateful Dead", ["tequila", "gin", "vodka", "rum", "raspberry liquer", "triple sec", "sour mix"])
        ];
        this.currentDrink = 0;
        
        if(document.getElementById("drinkCalcBtn").classList.contains("disabled")) {
            document.getElementById("drinkCalcBtn").classList.remove("disabled");
            document.getElementById("drinkCalc").remove();
        }
    
        console.log("clicked menu");
        document.getElementById("recipeMenuBtn").classList.add("disabled");
        let recipeMenu = document.createElement("div");
        recipeMenu.classList.add("menu");
        recipeMenu.setAttribute("id", "recipeMenu");
        recipeMenu.innerHTML = "<h1>Recipe Menu</h1>";
        document.getElementById("menuSection").appendChild(recipeMenu);
    
        let recipes = document.createElement("div");
        recipes.classList.add("recipesMenu");
        recipes.setAttribute("id", "recipes");
        document.getElementById("recipeMenu").appendChild(recipes);
    }

    filterAlphabetical() { //arrange drinks array into alphabetical order

    }

    //todo: add other filter types

    switchRight() { //buttons on left and right to switch between available drinks
        this.derender(this.drinks[currentDrink]);

        if(this.currentDrink < this.drinks.length-1) {this.currentDrink++;}
        else {this.currentDrink = 0;}

        this.renderDrink(this.drinks[currentDrink]);
    }

    switchLeft() {
        this.derender(this.drinks[currentDrink]);

        if(this.currentDrink > 0) {this.currentDrink--;}
        else {this.currentDrink = this.currentDrink.length-1;}

        this.renderDrink(this.drinks[currentDrink]);
    }

    renderDrink() { //todo: implement code to render this.currentDrink
        
    }

    derender() { //clean up elements created by render drink

    }
}

export{Menu}