import { Menu } from './menu.js';
import { calculator } from './calculator.js';

//main file / script, handles creating eventListeners

const menu = document.getElementById("menu");

const initialPic =  document.createElement("img");
initialPic.innerHTML = 'src="https://cf.ltkcdn.net/cocktails/images/std-lg/268481-1200x773-what-is-liqueur-how-is-it-different-from-liquor.webp" alt="liquors & liquers"'
menu.appendChild(initialPic);


document.getElementById("recipeMenuBtn").addEventListener("click", () => {
    if(firstClick) {document.getElementById("initialPic").remove();}
    let menu = new Menu();
});

document.getElementById("drinkCalcBtn").addEventListener("click", () => {
    if(firstClick) {document.getElementById("initialPic").remove();}
    let calc = new Calculator();
});