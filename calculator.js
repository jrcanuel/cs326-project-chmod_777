import { Drink } from './drink.js';

//Calculator class, which is instantiated everytime the button is pressed

class Calculator {
    constructor() {
        this.ingredients = {} //todo: add list of mainstream ingredients as <ingredient: String, have: Boolean>

        if(document.getElementById("recipeMenuBtn").classList.contains("disabled")) {
            document.getElementById("recipeMenuBtn").classList.remove("disabled");
            document.getElementById("recipeMenu").remove();
        }

        console.log("clicked calc");
        document.getElementById("drinkCalcBtn").classList.add("disabled");
        let drinkCalc = document.createElement("div");
        drinkCalc.classList.add("menu");
        drinkCalc.setAttribute("id", "drinkCalc");
        drinkCalc.innerHTML = "<h1>Drink Calculator</h1>";
        document.getElementById("menuSection").appendChild(drinkCalc);

        let calculator = document.createElement("div");
        calculator.classList.add("calculator");
        calculator.setAttribute("id", "calculator");
        document.getElementById("drinkCalc").appendChild(calculator);

        //repeated code below from menu.js; could be condensed into new class later.

        let leftButton = document.createElement("input");
        leftButton.type = "button";
        leftButton.value = "< Previous";
        leftButton.classList.add("leftButton");
        leftButton.setAttribute("id", "leftButton");
        leftButton.style.marginTop = '10px';
        leftButton.style.marginRight = '10px';
        document.getElementById("drinkCalc").appendChild(leftButton);

        let rightButton = document.createElement("input");
        rightButton.type = "button";
        rightButton.value = "Next >";
        rightButton.classList.add("rightButton");
        rightButton.setAttribute("id", "rightButton");
        rightButton.style.marginTop = '10px';
        rightButton.style.marginLeft = '10px';
        document.getElementById("drinkCalc").appendChild(rightButton);
    }

    addIngredient(ingredient) { //to be used with a text input / checkbox inputs
        this.ingredients[ingredient] = true;
    }

    removeIngredient(ingredient) {
        this.ingredients[ingredient] = false;
    }

    ingredientsArray() {    //useful for comparing ingredients to a drink.
        let arr = [];
        Object.keys(this.ingredients).forEach(ingredient => {
            if(ingredients[ingredient]) {arr.push(ingredient);}
        })
    }
}

export{Calculator}