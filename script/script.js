const bill = document.getElementById('bill-amount');
const people = document.getElementById('no-of-people');
const tipRadio = document.getElementsByName('myRadio');
const tipInput = document.getElementById('tip-value-custom');
const reset = document.getElementById('reset-all');

/* Some Variables */
let billAmount = 0;
let noOfPeople = 0;
let tipAmount = 0;
/*Display to page*/
let totalTip = 0.00;
let tipPerPerson = 0.00;

bill.addEventListener('input', e => {
    billAmount = bill.value;

    calcTipPerPerson();
    calcTotalTip();
});

tipRadio.forEach( tip => {
    tip.addEventListener('click', e => {
        tipAmount = 0;
        tipInput.value = null;

        tipAmount = tip.value;
        calcTipPerPerson();
        calcTotalTip();
    });
} );

tipInput.addEventListener('input', e => {
    /*Deselect all the radio options*/
    deselectAll();
    tipAmount = 0;
    tipAmount = tipInput.value;

    calcTipPerPerson();
    calcTotalTip();
});


people.addEventListener('input', e => {
    noOfPeople = Math.floor(people.value);

    calcTipPerPerson();
    calcTotalTip();
});


/* Useful Functions */

/* Deselect all the radio options */
function deselectAll() {
    tipRadio.forEach( tip =>{
        tip.checked = false;
    });
}

function calcTotalTip() {
    totalTip = (billAmount*tipAmount)/100;
    document.getElementById('total-amount').innerHTML = '$' + totalTip.toFixed(2).toString();
}

function calcTipPerPerson() {
    if(noOfPeople == 0 | noOfPeople == null){
        tipPerPerson = 0.00;
    } else {
        tipPerPerson = (billAmount*tipAmount)/(100*noOfPeople);
    }
    document.getElementById('per-person-amount').innerHTML = '$' + tipPerPerson.toFixed(2).toString();
}



/* The Reset Button */
reset.addEventListener('click', e => {
    billAmount = 0;
    noOfPeople = 0;
    tipAmount = 0;
    totalTip = 0.00;
    tipPerPerson = 0.00;

    document.getElementById('total-amount').innerHTML = '$' + totalTip.toFixed(2).toString();
    document.getElementById('per-person-amount').innerHTML = '$' + tipPerPerson.toFixed(2).toString();

    deselectAll();
    bill.value = null;
    tipInput.value = null;
    people.value = null;

});




