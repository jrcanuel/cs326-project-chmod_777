import { Drink } from './drink.js';

//Menu class, which is instantiated everytime the button is pressed

class Menu {
    constructor() {
        this.drinks = [ //todo: array of 20 popular drink objects, change to an imported array from drink.js & add to calculator.js 
            new Drink("Dirty Shirley", ["Lemon-Lime Soda", "Grenadine", "Vodka"], "https://s.yimg.com/ny/api/res/1.2/BVky3owZzXDoSnibOAw8Qg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/uu/api/res/1.2/R6vY9szGtXPVLYPKrlh2vw--~B/aD0wO3c9MDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/purewow_185/f51ae90008d571aa78f1d8d8106c4a12"),
            new Drink("Grateful Dead", ["Tequila", "Gin", "Vodka", "Rum", "Raspberry Liquer", "Triple Sec", "Sour Mix"], "https://fullformtoday.com/wp-content/uploads/2022/03/Blue-Grateful-Dead-Drink-Recipe.jpg"),
            new Drink("Long Island Iced Tea", ["Vodka", "Rum", "Tequila", "Gin", "Triple Sec", "Lemon Juice", "Cola"], "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/long-island-iced-tea-7-1650298273.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*")
        ];
        this.currentDrink = 0;
        var lastDrink;
        
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

        this.renderDrink();
    }

    filterAlphabetical() { //arrange drinks array into alphabetical order... filter select implementation todo.

    }

    //todo: add other filter types

    switchRight() { //buttons on left and right to switch between available drinks
        this.derender(this.drinks[this.currentDrink].title);

        if(this.currentDrink < this.drinks.length-1) {this.currentDrink++;}
        else {this.currentDrink = 0;}

        this.renderDrink(this.drinks[this.currentDrink]);

        console.log("Drink " + this.currentDrink + ":");
        console.log(this.drinks[this.currentDrink]);
    }

    switchLeft() {
        this.derender(this.drinks[this.currentDrink].title);

        if(this.currentDrink > 0) {this.currentDrink--;}
        else {this.currentDrink = this.drinks.length-1;}
        
        this.renderDrink(this.drinks[this.currentDrink]);

        console.log("Drink " + this.currentDrink + ":");
        console.log(this.drinks[this.currentDrink]);
    }

    renderDrink() { //todo: contain drink title, image, and recipe into a container, and remove that container in derender; this will make this simpler.
        //title
        let curr = this.drinks[this.currentDrink]
        let drinkRecipe = document.createElement("div");
        drinkRecipe.style.color = "green";
        drinkRecipe.setAttribute("id", curr.title);
        drinkRecipe.innerHTML = "<br><h1>" + curr.title + ":</h1>";
        document.getElementById("recipes").appendChild(drinkRecipe);

        //image
        let drinkPic = document.createElement("img");
        drinkPic.setAttribute("id", curr.title + " pic");
        drinkPic.setAttribute("src", curr.pic);
        drinkPic.setAttribute("alt", "Image of the Beverage")
        document.getElementById("recipes").appendChild(drinkPic);

        //ingredients                                                       //figure out why <h1> isnt working & fix it.
        let drinkIngredients = document.createElement("div");
        drinkIngredients.setAttribute("id", curr.title + " ingredients");
        drinkIngredients.innerHTML = "<h1>";
        curr.ingredients.forEach(ingredient => {
            drinkIngredients.innerHTML += ingredient
            if(ingredient != curr.ingredients[curr.ingredients.length-1]) {drinkIngredients.innerHTML += ", "}
        });
        drinkIngredients.innerHTML += "</h1>";
        document.getElementById("recipes").appendChild(drinkIngredients);
    }

    derender(elementID) { //clean up elements created by render drink
        document.getElementById(elementID).remove();
        document.getElementById(elementID + " pic").remove();
        document.getElementById(elementID + " ingredients").remove();
    }
}

export{Menu}