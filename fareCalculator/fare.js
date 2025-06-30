//define the variables, base fare and per kilometer charge
const baseFare = 50;
const perKmCharge = 15;

//prompt the user to enter the distance
const usrInput = prompt("Unafika wapi mkubwa? Kilometer ngapi?" )

//Validate user input
if (isNaN(usrInput) || usrInput <=0 ) {
    console.log("please enter a valid distance")
} 
else {
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

