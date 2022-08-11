import { Drink } from './drink.js';

//Menu class, which is instantiated everytime the button is pressed

class Menu {
    constructor() {
        this.drinks = [ //todo: array of 20 popular drink objects, change to an imported array from drink.js & add to calculator.js 
            new Drink("Dirty Shirley", ["sprite", "grenadine", "vodka"]),
            new Drink("Grateful Dead", ["tequila", "gin", "vodka", "rum", "raspberry liquer", "triple sec", "sour mix"]),
            new Drink("Long Island Iced Tea", ["vodka", "rum", "tequila", "gin", "triple sec", "lemon juice", "coke"])
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

        //code below repeated in calculator.js; could be condensed into new class later.

        let leftButton = document.createElement("input");
        leftButton.type = "button";
        leftButton.value = "< Previous";
        leftButton.classList.add("leftButton");
        leftButton.setAttribute("id", "leftButton");
        leftButton.style.marginTop = '10px';
        leftButton.style.marginRight = '10px';
        document.getElementById("recipeMenu").appendChild(leftButton);

        document.getElementById("leftButton").addEventListener("click", () => {
            this.switchLeft();
        });

        let rightButton = document.createElement("input");
        rightButton.type = "button";
        rightButton.value = "Next >";
        rightButton.classList.add("rightButton");
        rightButton.setAttribute("id", "rightButton");
        rightButton.style.marginTop = '10px';
        rightButton.style.marginLeft = '10px';
        document.getElementById("recipeMenu").appendChild(rightButton);

        document.getElementById("rightButton").addEventListener("click", () => {
            this.switchRight();
        })
    }

    filterAlphabetical() { //arrange drinks array into alphabetical order... filter select implementation todo.

    }

    //todo: add other filter types

    switchRight() { //buttons on left and right to switch between available drinks
        this.derender(this.drinks[this.currentDrink]);
        if(this.currentDrink < this.drinks.length-1) {this.currentDrink++;}
        else {this.currentDrink = 0;}
        this.renderDrink(this.drinks[this.currentDrink]);

        console.log("Drink " + this.currentDrink + ":");
        console.log(this.drinks[this.currentDrink]);
    }

    switchLeft() {
        this.derender(this.drinks[this.currentDrink]);
        if(this.currentDrink > 0) {this.currentDrink--;}
        else {this.currentDrink = this.drinks.length-1;}
        this.renderDrink(this.drinks[this.currentDrink]);

        console.log("Drink " + this.currentDrink + ":");
        console.log(this.drinks[this.currentDrink]);
    }

    renderDrink() { //todo: implement code to render this.currentDrink
        let curr = this.drinks[this.currentDrink]
        let drinkRecipe = document.createElement("div");
        drinkRecipe.innerHTML = "<h1>" + this.drinks[this.currentDrink].title
    }

    derender() { //clean up elements created by render drink

    }
}

export{Menu}