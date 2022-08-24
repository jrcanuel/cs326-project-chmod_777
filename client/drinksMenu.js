class DrinksMenu {
    constructor() {
        this.drinks = [];       //used for comparison / subset of drinks.json via calculator.js
        this.currDrink = 0;
    }

    async render(element) {
        const response1 = await fetch('/readD');
        const drinks = await response1.json();

        const response2 = await fetch('/readCI');
        const currI = await response2.json();

        if(currI.length === 0) {this.drinks = drinks;}

        else {
            this.drinks = drinks.filter(drink => {
                let res = true;
                drink.ingredients.forEach(i => {if(currI.indexOf(i) === -1) {res = false;}});
                return res;
            });
        }

        if(this.drinks.length <= 0) {element.innerHTML = `<h1><br>ERROR: <br><br><br> NO DRINKS AVAILABLE FROM YOUR <br><br> CURRENT SELECTION OF INGREDIENTS. 
                                                          <br><br><br> PLEASE CHANGE YOUR SEARCH CRITERIA AND COME BACK.</h1>`;} 

        else {
            element.innerHTML = await this.renderCurr();
            this.addButtons(element);
        }

        element.classList.remove('calculatorMenu');
        if(element.hasAttribute("class", "drinksMenu")) {element.classList += ' drinksMenu';}
    }

    async renderCurr() {    //returns string HTML of currDrink object
        let drink = await this.drinks[this.currDrink];
        let ingredients = drink.ingredients;
        let recipe = ''
        for(let i = 0; i < ingredients.length-1; i++) {recipe += ingredients[i] + ', ';}
        recipe += ingredients[ingredients.length-1];
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

    shiftRight() {
        if(this.currDrink >= this.drinks.length-1) {
            this.currDrink = 0;
        }
        else {
            this.currDrink++;
        }
    }

    shiftLeft() {
        if(this.currDrink > 0) {
            this.currDrink--;
        }
        else {
            this.currDrink = this.drinks.length-1;
        }
    }

    addButtons(element) {
        element.innerHTML += `<input type="button" class="shiftButton" id="leftBtn" value="Previous"></input>
                              <input type="button" class="shiftButton" id="rightBtn" value="Next"></input>`;

        document.getElementById('leftBtn').addEventListener('click', () => {
            this.shiftLeft()
            this.render(element);
        });

        document.getElementById('rightBtn').addEventListener('click', () => {
            this.shiftRight()
            this.render(element);
        });
    }
}

const drinksMenu = new DrinksMenu();

export{drinksMenu};