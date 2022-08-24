class Calculator {
    constructor() {
        this.ingredients = [ //all ingredients; used for creating ingredient select menu
            "Lemon-Lime Soda", "Grenadine", "Vodka", "Tequila", "Cointreau", "Lime Juice",
            "Gin", "Vermouth", "Bourbon", "Bitters", "Champagne", "Orange Juice", 
            "Ginger Beer", "Citrus Vodka", "Cranberry Juice", "Rum", "Raspberry Liquer",
            "Triple Sec", "Sour Mix", "Whiskey", "Lemon Juice", "Rye", "White Rum", "Simple Syrup"
        ] 
        
        this.currIngredients = []; //currently selected ingredients
    }

    async render(element) {
        const response = await fetch('/readCI');
        const data = await response.json();
        this.currIngredients = data;
        element.innerHTML = this.currIngredients;
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
        console.log(this.currIngredients);
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
        console.log(this.currIngredients);
    }
}

const calculator = new Calculator();

export{ calculator }