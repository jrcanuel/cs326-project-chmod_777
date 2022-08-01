Mix Masters

# Team Overview

Jason Canuel - jrcanuel

# Application Idea

The idea behind this project is that we will provide users with a large list of possible alcoholic beverages, and detailed instructions on how to make them (ie, their recipes which tell required ingredients and steps on how to make it). The drinks themselves will be listed, and be able to be clicked on to show the recipe.

Not only this, but the application will also provide a calculator that will take from users their volume of various ingredients, and return a list of recipes that they have the proper ingredients to make.

These ingredients will also be listed on the sight, along with their usual prices, which will be gathered with some research from local websites that sell them and taking a rough average of them. They will be sourced and credited.

Lastly, there will be a rating system, in which under each recipe, users can write their rating (1-5 stars), and possibly comments, and the average rating, along with number of ratings, will be displayed.

Data: 
Beverages,
Beverage Instructions (strings of what to do; ie "add ice"),
Beverage Requirements (ingredients + volumes)
Ingredients,
Ingredient Prices,
Ratings,
Comments

# Functionality

My idea for this application is that it will have a long list of mixed drinks / cocktail recipes already in it as a list of objects, with properties with keys as ingredient names, and values as integers that represent the volume required of that given ingredient. The objects will hold a function that outputs the recipes along with instructions (such as shaking) in the correct places on the web page in order to make a realistic recipe display. 

The calculator will be something towards the front of the page that can narrow down these objects via fluent design and cross objects off a "possible" list that originally contains all recipes as it slowly filters them based on what the person has available, starting with what they have the most of down to what they have the least of, and automatically inputting 0's for ingredients not mentioned as input. Essentially, if their ingredient volume they input is >= the requirement, the object will stay in the possible list. Otherwise, it is removed. This can be done through a forEach loop for each possible ingredient.

The comments / rating systems will likely be an array of objects, possibly capped at a certain number to avoid problems. Those objects would hold a string that is their comment, and a number that is their rating. Every time a new rating is added (a comment cannot be added without a rating*), this number will be added to the list of previous ratings and the average will be recalculated and the display will be updated.
