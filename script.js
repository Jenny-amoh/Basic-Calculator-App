const result = document.getElementById('result');
const num = document.getElementById('btn');
const operator = document.getElementById('operator');
const equals = document.getElementById('equals');
const erase = document.getElementById('del');
const AC= document.getElementById('AC');


//number = num.textContent;
//console.log(`${typeof number}`); getting string number

//buttonNumber = Number(num); changing the string to number
//buttonNumber = parseFloat(num);
//console.log(`${typeof buttonNumber}`);

//Operators = (operator);
//console.log(`${typeof Operators}`);

function appendToDisplay (input){
    result.value += input;
}

function calculate(){
    try{
        result.value = eval(result.value);
    } catch (error){
        result.value = "Error";
    }
}

function clearDisplay(){
    result.value = "";
}

function del(){
    result.value = result.value.slice(0, -1);
}
