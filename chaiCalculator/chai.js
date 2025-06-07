function calculateChaiIngredients(perCupIngredients, numberOfCups) {
    //total ingredients needed
    const totalIngredients = {};
    
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
const cupsToMake = parseInt(input, 10);

//validate the user input
if (!isNaN(cupsToMake) && cupsToMake > 0) {
    const totalNeeded = calculateChaiIngredients(ingredientsForOneCup, cupsToMake);

    console.log(`To make ${input} cups of Kenyan Chai, you will need: `)
    for (const [ingredient, {amount, unit}] of Object.entries(totalNeeded)) {
        console.log(`${ingredient}: ${amount} ${unit}`);
    }
} else {
    console.log("Karibu! Please enter a valid number of cups to make!");
}