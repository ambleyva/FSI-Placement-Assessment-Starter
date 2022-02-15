
// First, tell us your name
let yourName = "Amber Rose Leyva" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
if(document.getElementById("qty-gb") != null){
    var gbPlusVotesCell=document.getElementById("qty-gb").innerHTML;
}

gbPlusBtn.addEventListener('click', function(e) {
    let gbPlusVotesCount = parseInt(gbPlusVotesCell.textContent);
    gbPlusVotesCount = gbPlusVotesCount + 1;
    gbPlusVotesCell.textContent = gbPlusVotesCount;
});

// Negative gb
const gbMinusBtn = document.querySelector('#minus-gb')
if(document.getElementById("qty-gb") != null){
    var gbMinusVotesCell = document.getElementById('qty-gb').innerHTML;
}
gbMinusBtn.addEventListener('click', function (e){
    let gbMinusVotesCount = parseInt(gbMinusVotesCell.textContent);
    gbMinusVotesCount = gbMinusVotesCount + 1;
    gbMinusVotesCell.textContent = gbMinusVotesCount;
    
});

//Plus Chocolate Chip 
