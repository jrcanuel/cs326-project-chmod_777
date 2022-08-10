import { Menu } from './menu.js';
import { Calculator } from './calculator.js';

//main file / script, handles creating eventListeners

let firstSelect = true;
document.getElementById("recipeMenuBtn").addEventListener("click", () => {
    let menu = new Menu();
});

document.getElementById("drinkCalcBtn").addEventListener("click", () => {
    let calc = new Calculator();
});