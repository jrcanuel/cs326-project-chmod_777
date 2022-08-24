//Menu class, which is instantiated everytime the button is pressed

class Menu {
    constructor() {
        
        if(document.getElementById("drinkCalcBtn").classList.contains("disabled")) {
            document.getElementById("drinkCalcBtn").classList.remove("disabled");
            document.getElementById("drinkCalc").remove();
        }
    
        console.log("clicked menu");
        document.getElementById("recipeMenuBtn").classList.add("disabled");
        let recipeMenu = document.createElement("div");
        recipeMenu.classList.add("menu");
        recipeMenu.setAttribute("id", "recipeMenu");
        recipeMenu.innerHTML = "<h1>Recipe Menu</h1>";
        document.getElementById("menuSection").appendChild(recipeMenu);
    
        let recipes = document.createElement("div");
        recipes.classList.add("recipesMenu");
        recipes.setAttribute("id", "recipes");
        document.getElementById("recipeMenu").appendChild(recipes);

        //code below repeated in calculator.js; could be condensed into new class later.

        let leftButton = document.createElement("input");
        leftButton.type = "button";
        leftButton.value = "< Previous";
        leftButton.classList.add("leftButton");
        leftButton.setAttribute("id", "leftButton");
        leftButton.style.marginTop = '10px';
        leftButton.style.marginRight = '10px';
        document.getElementById("recipeMenu").appendChild(leftButton);

        document.getElementById("leftButton").addEventListener("click", () => {
            this.switchLeft();
        });

        let rightButton = document.createElement("input");
        rightButton.type = "button";
        rightButton.value = "Next >";
        rightButton.classList.add("rightButton");
        rightButton.setAttribute("id", "rightButton");
        rightButton.style.marginTop = '10px';
        rightButton.style.marginLeft = '10px';
        document.getElementById("recipeMenu").appendChild(rightButton);

        document.getElementById("rightButton").addEventListener("click", () => {
            this.switchRight();
        })

        this.renderDrink();
    }

    filterAlphabetical() { //arrange drinks array into alphabetical order... filter select implementation todo.

    }

    //todo: add other filter types

    switchRight() { //buttons on left and right to switch between available drinks
        this.derender(this.drinks[this.currentDrink].title);

        if(this.currentDrink < this.drinks.length-1) {this.currentDrink++;}
        else {this.currentDrink = 0;}

        this.renderDrink(this.drinks[this.currentDrink]);

        console.log("Drink " + this.currentDrink + ":");
        console.log(this.drinks[this.currentDrink]);
    }

    switchLeft() {
        this.derender(this.drinks[this.currentDrink].title);

        if(this.currentDrink > 0) {this.currentDrink--;}
        else {this.currentDrink = this.drinks.length-1;}
        
        this.renderDrink(this.drinks[this.currentDrink]);

        console.log("Drink " + this.currentDrink + ":");
        console.log(this.drinks[this.currentDrink]);
    }

    renderDrink() { //todo: contain drink title, image, and recipe into a container, and remove that container in derender; this will make this simpler.
        //title
        let curr = this.drinks[this.currentDrink]
        let drinkRecipe = document.createElement("div");
        drinkRecipe.style.color = "green";
        drinkRecipe.setAttribute("id", curr.title);
        drinkRecipe.innerHTML = "<br><h1>" + curr.title + ":</h1>";
        document.getElementById("recipes").appendChild(drinkRecipe);

        //image
        let drinkPic = document.createElement("img");
        drinkPic.setAttribute("id", curr.title + " pic");
        drinkPic.setAttribute("src", curr.pic);
        drinkPic.setAttribute("alt", "Image of the Beverage")
        document.getElementById("recipes").appendChild(drinkPic);

        //ingredients                                                       //figure out why <h1> isnt working & fix it.
        let drinkIngredients = document.createElement("div");
        drinkIngredients.setAttribute("id", curr.title + " ingredients");
        drinkIngredients.innerHTML = "<h1>";
        curr.ingredients.forEach(ingredient => {
            drinkIngredients.innerHTML += ingredient
            if(ingredient != curr.ingredients[curr.ingredients.length-1]) {drinkIngredients.innerHTML += ", "}
        });
        drinkIngredients.innerHTML += "</h1>";
        document.getElementById("recipes").appendChild(drinkIngredients);
    }

    derender(elementID) { //clean up elements created by render drink
        document.getElementById(elementID).remove();
        document.getElementById(elementID + " pic").remove();
        document.getElementById(elementID + " ingredients").remove();
    }
}

export{Menu}