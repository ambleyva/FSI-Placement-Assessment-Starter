
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
const ccCounter = document.querySelector('#qty-cc').textContent
const scCounter = document.querySelector('#qty-sugar').textContent

const ctTallyCount = document.querySelector('#qty-total').textContent



// Event listener for clicks on the "+" button for Gingerbread cookies
var count = 0;
gbPlusBtn.addEventListener('click', function(e) {
    count ++;
    gbCounter.textContent = count;
});

gbMinusBtn.addEventListener('click', function(j){
    count --;
    gbCounter.textcontent = count;
});