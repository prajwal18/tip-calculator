const bill = document.getElementById('bill-amount');
const people = document.getElementById('no-of-people');
const tipRadio = document.getElementsByName('myRadio');
const tipInput = document.getElementById('tip-value-custom');
const reset = document.getElementById('reset-all');

/* To Edit the value in Screen */
const displayTipPerPerson = document.getElementById('tip-per-person');
const displayTotalBillPerPerson = document.getElementById('total-bill-per-person');

/* Some Variables for math*/
let billAmount = 0;
let noOfPeople = 0;
let tipPercent = 0;
let totalTip = 0;
/*Variables Displayed to page*/
let totalBillPerPerson = 0.00;
let tipPerPerson = 0.00;


/* Function to calculate value */
// Calculate Tip per person and bill per person
function calcTipAndBillPerPerson(billA, tipP, noP){
    if(noP == 0 | noP == null){
        tipPerPerson = 0.00;
        totalBillPerPerson = 0.00;
    } else {
        tipPerPerson = (billA*tipP)/(100*noP);
        totalBillPerPerson = billA/noP + tipPerPerson;
    }
    console.log(tipP);
    displayToScreen();
}
//display to screen
function displayToScreen(){
    displayTipPerPerson.innerHTML = '$' + tipPerPerson.toFixed(2).toString();
    displayTotalBillPerPerson.innerHTML = '$' + totalBillPerPerson.toFixed(2).toString();
}
//Reset All the values
function resetAll() {
    billAmount = 0;
    noOfPeople = 0;
    tipPercent = 0;
    totalTip = 0;
    totalBillPerPerson = 0.00;
    tipPerPerson = 0.00;
    displayToScreen();
    deselectAllRadio();
    //Remove value from input field
    bill.value = null;
    tipInput.value = null;
    people.value = null;
}

function deselectAllRadio(){
    tipRadio.forEach( tip =>{
        tip.checked = false;
    });
}


/* --------------------------- Now Adding Event Listener to various Parts --------------------------- */

bill.addEventListener('input', e => {
    billAmount = bill.value;
    calcTipAndBillPerPerson(billAmount, tipPercent, noOfPeople);
});

tipRadio.forEach( tip => {
    tip.addEventListener('click', e => {
        tipInput.value = null;
        tipPercent = tip.value;
        calcTipAndBillPerPerson(billAmount, tipPercent, noOfPeople);
    });
} );

tipInput.addEventListener('input', e => {
    /*Deselect all the radio options*/
    deselectAllRadio();
    tipPercent = tipInput.value;
    calcTipAndBillPerPerson(billAmount, tipPercent, noOfPeople);
});

people.addEventListener('input', e => {
    noOfPeople = Math.floor(people.value);
    calcTipAndBillPerPerson(billAmount, tipPercent, noOfPeople);
});

reset.addEventListener('click', e => {
    resetAll();
});
