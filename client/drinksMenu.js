class DrinksMenu {
    constructor() {
        this.drinks = [];       //used for comparison / subset of drinks.json via calculator.js
        this.currDrink = 0;     //tracks which drink to render; is inc'd or decr'd via shift methods. circular range of numbers*
    }

    async render(element) {
        const response1 = await fetch('/readD');    //upon loading this mode, set this.drinks to what is read from the server's drink json file via the '/readD' request
        const drinks = await response1.json();

        const response2 = await fetch('/readCI');   //same deal as above but with currIngredients json file from server and being stored into new array, to be used in a moment
        const currI = await response2.json();

        if(currI.length === 0) {this.drinks = drinks;}  //if no criteria is being searched for, show entire selection.

        else {
            this.drinks = drinks.filter(drink => {      //narrow down search based on user input from calculator mode
                let res = true;
                drink.ingredients.forEach(i => {if(currI.indexOf(i) === -1) {res = false;}});   //"for each drink, for each ingredient within the drink in question,
                return res;                                                                     //if we don't have the ingredient, remove this drink from possible drinks we can make"
            });
        }

        if(this.drinks.length <= 0) {element.innerHTML = `<h1><br>ERROR: <br><br><br> NO DRINKS AVAILABLE FROM YOUR <br><br> CURRENT SELECTION OF INGREDIENTS. 
                                                          <br><br><br> PLEASE CHANGE YOUR SEARCH CRITERIA AND COME BACK.</h1>`;} 
        //if no drinks can be made from the current selection, show an error message and instruct user what's wrong / how to fix it

        else {
            element.innerHTML = await this.renderCurr();    //otherwise, render the current drink
            this.addButtons(element);                       //and add buttons for scrolling through the selection
        }

        element.classList.remove('calculatorMenu');                                                 ////switch the classes of the menu element
        if(element.hasAttribute("class", "drinksMenu")) {element.classList += ' drinksMenu';}
    }

    async renderCurr() {    //returns string HTML of currDrink object so that it can be added to the menu element via += so that it can be easily erased later.
        let drink = await this.drinks[this.currDrink];
        let ingredients = drink.ingredients;
        let recipe = ''

        for(let i = 0; i < ingredients.length-1; i++) {recipe += ingredients[i] + ', ';}    //code that stylizes ingredients s.t. they're not "Lemon-Lime Soda,Grenadine,Vodka"
        recipe += ingredients[ingredients.length-1];                                                                             //but rather "Lemon-Lime Soda, Grenadine, Vodka"

        return `<h1>
                <br>
                ${drink.name}   
                <br>
                <img src="${drink.pic}" height="400" width="711">
                <br>
                </h1>
                <h2>
                ${recipe}
                </h2>`;
    }

    shiftRight() {                                        //to be used with buttons that are created via the render function (if there are drinks available)
        if(this.currDrink >= this.drinks.length-1) {        //both methods function similarly, just one going left (decrementing currDrink), and one going right
            this.currDrink = 0;                             //(incrementing currDrink)
        }
        else {                                              //note however that both are implemented such that the selection is circular, as going in one direction eventually
            this.currDrink++;                               //sends you back to the end in the opposite direction
        }
    }

    shiftLeft() {                                          //everything for this method is covered above
        if(this.currDrink > 0) {
            this.currDrink--;
        }
        else {
            this.currDrink = this.drinks.length-1;
        }
    }

    addButtons(element) {     //writes in html for buttons for scrolling selection
        element.innerHTML += `<input type="button" class="shiftButton" id="leftBtn" value="Previous"></input>
                              <input type="button" class="shiftButton" id="rightBtn" value="Next"></input>`;

        document.getElementById('leftBtn').addEventListener('click', () => {    //next, add event listeners to both to make them actually do the scrolling by calling the helper methods
            this.shiftLeft()
            this.render(element);   //make sure to render after each click in order to reset menu and call renderCurr() s.t. the currDrink will be rendered without having to refresh the page
        });

        document.getElementById('rightBtn').addEventListener('click', () => {
            this.shiftRight()
            this.render(element);
        });
    }
}

const drinksMenu = new DrinksMenu();

export{drinksMenu};