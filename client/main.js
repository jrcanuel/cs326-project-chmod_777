import { drinksMenu } from './drinksMenu.js';
import { calculator } from './calculator.js';

const menu = document.getElementById("menu");
const drinkBtn = document.getElementById("drinkMenuBtn");
const calcBtn = document.getElementById("calcMenuBtn");
//declare element references

menu.innerHTML = '<img src="https://cf.ltkcdn.net/cocktails/images/std-lg/268481-1200x773-what-is-liqueur-how-is-it-different-from-liquor.webp"></img>';
//render initial pic (will be replaced on first click)

drinkBtn.addEventListener("click", () => {
    console.log("drinks clicked");
    drinkBtn.classList += ' disabled';
    calcBtn.classList.remove('disabled');

    calculator.render(menu);
});

calcBtn.addEventListener("click", () => {
    console.log("calc clicked");
    calcBtn.classList += ' disabled';
    drinkBtn.classList.remove('disabled');

    drinksMenu.render(menu);
});