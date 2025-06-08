//define the variables, base fare and per kilometer charge
const baseFare = 50;
const perKmCharge = 15;

//prompt the user for an input
const userInputstr = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");

//convert user input to a number
const distance = parseFloat(userInputstr);

//validating the user input
if (isNaN(distance) || distance <= 0) {
    //display the distance based on the user input 
    console.log("Please enter a valid number of kilometers!");
} else{
    //calculate the fare and the total fare
    const fare = distance * perKmCharge;
    const totalFare = baseFare + fare;

    //Dispaly the results in the console
    console.log(`Uko kwote? Io ni ${distance}km:
    Ukikalia Pikipiki: KES ${baseFare}
    Mpaka Uko: KES ${fare}
    Total: KES ${totalFare} 
        
    Panda Pikipiki!`)
}