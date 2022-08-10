import { Drink } from './drink.js';

//Menu class, which is instantiated everytime the button is pressed

class Menu {
    constructor() {
        this.drinks = []    //todo: array of drink objects
        
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
}

export{Menu}