function estimateTransactionFee() {
    //prompt the user for the amount to send
    const amountstr = prompt("Unatuma Ngapi? (KES):");
    const amount = parseFloat(amountstr);

    //validate the user input
    if (isNaN(amount) || amount <= 0) {
        console.log("Weka Pesa unataka kutuma!");
        return;
    }

    //calculate the basic transaction fee

    let fee = amount * 0.015;
    
    //Calculate the minimum and maximum rules
    if (fee < 10) {
        fee = 10;
    } else if (fee > 70) {
        fee = 70;
    }

    const totalAmount = amount + fee;

    //Display the transaction fee and total amount to be debited
    console.log(`Sending KES ${amount}:
    Calculated Transaction Fee: KES ${fee}
    Total amount to be debited: KES ${totalAmount}

    Send Money Securely!`
    )
}

//call the function
estimateTransactionFee();