import { Menu } from './menu.js';
import { Calculator } from './calculator.js';

//main file / script, handles creating eventListeners
let firstClick = true;
let firstSelect = true;
document.getElementById("recipeMenuBtn").addEventListener("click", () => {
    if(firstClick) {document.getElementById("initialPic").remove();}
    let menu = new Menu();
    firstClick = false;
});

document.getElementById("drinkCalcBtn").addEventListener("click", () => {
    if(firstClick) {document.getElementById("initialPic").remove();}
    let calc = new Calculator();
    firstClick = false;
});