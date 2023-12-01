// My ATM
var amount = Number(window.prompt("Please enter the transaction amount:"));


if (isNaN(amount) || amount <= 0) {
    window.alert("Invalid amount. Please enter a valid positive number.");
} else {

    var fiveThousandNotes = Math.floor(amount / 5000);
    var remainingFiveThousandNotes = amount % 5000;

    var oneThousandNotes = Math.floor(remainingFiveThousandNotes / 1000);
    var remainingOneThousandNotes = remainingFiveThousandNotes % 1000;

    var fiveHundredNotes = Math.floor(remainingOneThousandNotes / 500);
    var remainingFiveHundredNotes = remainingOneThousandNotes % 500;

    var hundredNotes = Math.floor(remainingFiveHundredNotes / 100);


    var TransactionMessage = "Your Transaction:\n";
    TransactionMessage += fiveThousandNotes + " notes of 5000\n";
    TransactionMessage += oneThousandNotes + " notes of 1000\n";
    TransactionMessage += fiveHundredNotes + " notes of 500\n";
    TransactionMessage += hundredNotes + " notes of 100\n";

    window.alert(TransactionMessage);
}
