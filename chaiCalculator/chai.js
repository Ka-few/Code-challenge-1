//function to calculate the ingredients required to make a cup of chai
function calculateChaiIngredients(perCupIngredients, numberOfCups) {
    //total ingredients needed
    const totalIngredients = {};
    //For loop to loop through the object keys i.e perCupIngredients
    for (const ingredient in perCupIngredients) {
        const {amount, unit} = perCupIngredients[ingredient];
        totalIngredients[ingredient] = {
            amount: amount * numberOfCups, unit
        };
    }

    return totalIngredients;

}

//Ingredients needed for one cup
const ingredientsForOneCup = {
    'Water': {amount: 200, unit: "ml"},
    'Milk': {amount: 50, unit: "ml"},
    'Tea leaves (Majani)': {amount:1, unit: "tablespoons"},
    'Sugar (Sukari)': {amount:2, unit: "teaspoons"}
    };

//Prompt the user for number of cups needed
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");

//convert the user input from string to number, in this case to a base 10 number system i.e regular decimal number
const cupsToMake = parseInt(input, 10);

//validate the user input
if (!isNaN(cupsToMake) && cupsToMake > 0) {
    const totalNeeded = calculateChaiIngredients(ingredientsForOneCup, cupsToMake);
    
    //display the number of cups  the user intends to make.
    console.log(`To make ${input} cups of Kenyan Chai, you will need: `)
    
    //Loop through an array of [key, value] pairs using Object.entries()
    for (const [ingredient, {amount, unit}] of Object.entries(totalNeeded)) {
        
        //dislpay the the total ingredients required to make the number of cups of chai the user inteds to make 
        console.log(`${ingredient}: ${amount} ${unit}`);
    }
} else {
    console.log("Karibu! Please enter a valid number of cups to make!");
}