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
}

const calculator = new Calculator();

export{ calculator }