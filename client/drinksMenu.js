class DrinksMenu {
    constructor() {
        this.drinks = [];       //used for comparison / subset of drinks.json via calculator.js
        this.currDrink = 0;
    }

    async render(element) {
        const response = await fetch('/readD');
        this.drinks = await response.json();
        element.innerHTML = await this.renderCurr();
        addButtons(element);
        element.classList.remove('calculatorMenu');
        element.classList += ' drinksMenu';
    }

    async renderCurr() {    //returns string HTML of currDrink object
        let drink = this.drinks[this.currDrink];
        return `${drink.name}
                <br>
                <img src="${drink.pic}">
                <br>
                ${drink.ingredients}`;
    }

    shiftRight() {
        if(this.currDrink >= this.drinks.length) {
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
            this.currDrink = this.drinks.length;
        }
    }

    addButtons() {
        
    }
}

const drinksMenu = new DrinksMenu();

export{drinksMenu};