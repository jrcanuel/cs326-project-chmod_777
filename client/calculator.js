class Calculator {
    constructor() {
        this.ingredients = [ //all ingredients; used for creating ingredient select menu
            "Lemon-Lime Soda", "Grenadine", "Vodka", "Tequila", "Cointreau", "Lime Juice",
            "Gin", "Vermouth", "Bourbon Whiskey", "Bitters", "Champagne", "Orange Juice", 
            "Ginger Beer", "Citrus Vodka", "Cranberry Juice", "Rum", "Raspberry Liquer",
            "Triple Sec", "Sour Mix", "Whiskey", "Lemon Juice", "Rye Whiskey", "White Rum", "Simple Syrup"
        ] 
        
        this.currIngredients = []; //currently selected ingredients
    }

    async render(element) {                                         //renders the entire calculator "mode", called when that button is clicked
        const response = await fetch('/readCI');
        const data = await response.json();
        this.currIngredients = data;                                //fetch the current ingredients from server
        element.innerHTML = '';                                     //clear the menu element

        this.createCheckBoxes(element);                             //create check box elements

        element.classList.remove('drinksMenu');                     //switch the classes of the menu element
        element.classList += ' calculatorMenu';
    }

    async addIngredient(ingredient) {                               //makes a fetch request to the server to add the ingredient to the respective json object
        const data = {ingredient: ingredient};                      //*also updates this object's currIngredients property
        this.currIngredients.push(ingredient);
        const response = await fetch('/add', {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    async removeIngredient(ingredient) {                           //like the previous function, except it removes the ingredient instead
        const data = {ingredient: ingredient};
        this.currIngredients = this.ingredients.filter((i) => {
            return i !== ingredient;
        });
        const response = await fetch('/remove', {
            headers: {'Content-Type': 'application/json'},
            method: 'DELETE',
            body: JSON.stringify(data)
        });
    }

    createCheckBoxes(element) {                                  //checkboxes for the user to check off the ingredients they currently have
        this.ingredients.forEach(elem => {
            let check = '';                                                     //start empty so we can add it regardless
            if(this.currIngredients.indexOf(elem) != -1) {check = ' checked';}  //if it's in our currently selected ingredients, make the box start checked
            element.innerHTML += `<input type="checkbox" id="${elem}" value="1"${check}>${elem}</input>`
            });
        
        this.ingredients.forEach(elem => {                                      //after instantiating the boxes, create event listeners for each
            document.getElementById(elem).addEventListener('change', () => {
                if(document.getElementById(elem).checked) {this.addIngredient(elem);}   //clicks that check the boxes add ingredients to the server's json object
                else {this.removeIngredient(elem);}                                     //clicks that uncheck the boxes remove them.
            })
        });
    }
}

const calculator = new Calculator();

export{ calculator }    //create and export the one and only calculator object being used