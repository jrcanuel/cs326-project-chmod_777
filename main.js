import { Menu } from './menu.js';
import { Calculator } from './calculator.js';

//main file / script, handles creating eventListeners

//general todo: fix up element names in other classes; currently confusing with names like "recipeMenu" vs "menu" vs "recipesMenu" etc.
//^^^ also, eventListeners within menu and calculator js files could be cleaned up by writing them into functions and calling functions inside constructor.

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