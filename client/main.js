import { drinksMenu } from './drinksMenu.js';
import { calculator } from './calculator.js';

//This file mostly just handles the application's ability to "switch modes"

const menu = document.getElementById("menu");               //menu element that will be updated when the modes are called
const drinkBtn = document.getElementById("drinkMenuBtn");   //sets it to drink selection mode
const calcBtn = document.getElementById("calcMenuBtn");     //sets it to calc mode
//declare element references

menu.innerHTML = '<img src="https://cf.ltkcdn.net/cocktails/images/std-lg/268481-1200x773-what-is-liqueur-how-is-it-different-from-liquor.webp"></img>';
//render initial pic (will be replaced on first click)

drinkBtn.addEventListener("click", () => {  //when the drinks menu button is clicked:
    drinkBtn.classList += ' disabled';          //disable it
    calcBtn.classList.remove('disabled');       //enable the calc button

    drinksMenu.currDrink = 0;                   //this prevents errors from trying to render a no longer available drink due to a new search criteria
    drinksMenu.render(menu);                    //straightforward; renders it via the drinksMenu's render function
});

calcBtn.addEventListener("click", () => {
    calcBtn.classList += ' disabled';           //function is nigh identical to what's above, save for not needing to worry about currDrink
    drinkBtn.classList.remove('disabled');

    calculator.render(menu);
});