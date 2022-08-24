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

    async render(element) {
        const response = await fetch('/readCI');
        const data = await response.json();
        this.currIngredients = data;
        element.innerHTML = '';

        this.createCheckBoxes(element);

        element.classList.remove('drinksMenu');
        element.classList += ' calculatorMenu';
    }

    async addIngredient(ingredient) {
        const data = {ingredient: ingredient};
        this.currIngredients.push(ingredient);
        const response = await fetch('/add', {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    async removeIngredient(ingredient) {
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

    createCheckBoxes(element) {
        this.ingredients.forEach(elem => {
            let check = '';
            if(this.currIngredients.indexOf(elem) != -1) {check = ' checked';}
            element.innerHTML += `<input type="checkbox" id="${elem}" value="1"${check}>${elem}</input>`
            });
        
        this.ingredients.forEach(elem => {
            document.getElementById(elem).addEventListener('change', () => {
                if(document.getElementById(elem).checked) {this.addIngredient(elem);}
                else {this.removeIngredient(elem);} 
            })
        });
    }
}

const calculator = new Calculator();

export{ calculator }