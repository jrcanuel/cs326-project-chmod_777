//Calculator class, which is instantiated everytime the button is pressed

class Calculator {
    constructor() {
        this.ingredients = [ //all ingredients; used for creating ingredient select menu
            "Lemon-Lime Soda", "Grenadine", "Vodka", "Tequila", "Cointreau", "Lime Juice",
            "Gin", "Vermouth", "Bourbon", "Bitters", "Champagne", "Orange Juice", 
            "Ginger Beer", "Citrus Vodka", "Cranberry Juice", "Rum", "Raspberry Liquer",
            "Triple Sec", "Sour Mix", "Whiskey", "Lemon Juice", "Rye", "White Rum", "Simple Syrup"
        ] 
        
        this.currIngredients = []; //currently selected ingredients

    //     if(document.getElementById("recipeMenuBtn").classList.contains("disabled")) {
    //         document.getElementById("recipeMenuBtn").classList.remove("disabled");
    //         document.getElementById("recipeMenu").remove();
    //     }

    //     document.getElementById("drinkCalcBtn").classList.add("disabled");
    //     let drinkCalc = document.createElement("div");
    //     drinkCalc.classList.add("menu");
    //     drinkCalc.setAttribute("id", "drinkCalc");
    //     drinkCalc.innerHTML = "<h1>Drink Calculator</h1>";
    //     document.getElementById("menuSection").appendChild(drinkCalc);

    //     let calculator = document.createElement("div");
    //     calculator.classList.add("calculator");
    //     calculator.setAttribute("id", "calculator");
    //     document.getElementById("drinkCalc").appendChild(calculator);

    //     //repeated code below from menu.js; could be condensed into new class later.

    //     let leftButton = document.createElement("input");
    //     leftButton.type = "button";
    //     leftButton.value = "< Previous";
    //     leftButton.classList.add("leftButton");
    //     leftButton.setAttribute("id", "leftButton");
    //     leftButton.style.marginTop = '10px';
    //     leftButton.style.marginRight = '10px';
    //     document.getElementById("drinkCalc").appendChild(leftButton);

    //     let rightButton = document.createElement("input");
    //     rightButton.type = "button";
    //     rightButton.value = "Next >";
    //     rightButton.classList.add("rightButton");
    //     rightButton.setAttribute("id", "rightButton");
    //     rightButton.style.marginTop = '10px';
    //     rightButton.style.marginLeft = '10px';
    //     document.getElementById("drinkCalc").appendChild(rightButton);
     }
}

const calculator = new Calculator();

export{ calculator }