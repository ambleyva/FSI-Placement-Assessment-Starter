
// First, tell us your name
let yourName = "Amber Rose Leyva" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')

const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')

const scPlusBtn = document.querySelector('#add-sugar')
const scMinusBtn = document.querySelector('#Minus-sugar')

const gbCounter = document.querySelector('#qty-gb')
const ccCounter = document.querySelector('#qty-cc')
const scCounter = document.querySelector('#qty-sugar')

const qtCounter = document.querySelector('#qty-total')


// Event listener for Gingerbread cookies
var count = 0;
gbPlusBtn.addEventListener('click', function(e) {
    count ++;
    gbCounter.textContent = count;
    qtCounter.textContent = count;
});

gbMinusBtn.addEventListener('click', function(e){
    count --;
    gbCounter.textContent = count;
    qtCounter.textContent = count;
});

// Event Listner for clicks cc
var count1 = 0;
ccPlusBtn.addEventListener('click', function(e) {
    count1 ++;
    ccCounter.textContent = count1;
    qtCounter.textContent = count1;
});

ccMinusBtn.addEventListener('click', function(e) {
    count1 --;
    ccCounter.textContent = count1;
    qtCounter.textContent = count1;
});

//Event Listner for sc
var count2 = 0;
scPlusBtn.addEventListener('click', function(e) {
    count2 ++;
    scCounter.textContent = count2;
    qtCounter.textContent = count2;
});