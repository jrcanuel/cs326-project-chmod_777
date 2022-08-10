import { Menu } from './menu.js';
import { Calculator } from './calculator.js';

let menu = new Menu();
let calc = new Calculator();

document.getElementById("recipeMenuBtn").addEventListener("click", () => {
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
});

document.getElementById("drinkCalcBtn").addEventListener("click", () => {
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
});