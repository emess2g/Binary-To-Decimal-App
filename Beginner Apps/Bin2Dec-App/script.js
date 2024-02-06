
const result = document.getElementById('result');

function convertBinary(){
const binaryInput = document.getElementById('binaryInput').value;

if(!/^[01]+$/.test(binaryInput) || binaryInput.length > 8){
   result.innerText = 'Invalid Input. Please enter a valid binary string with up to 8 digits'
}else{
   const decimalResult = binToDec(binaryInput)
   result.innerText = `Decimal equivalent: ${decimalResult}`;
}
}

function binToDec(binaryStr){

    let decimalValue = 0;
    binaryStr = binaryStr.split('').reverse().join('');

    for(let i = 0; i < binaryStr.length; i++){
        if(binaryStr[i] === '1'){
            decimalValue += Math.pow(2, i);
        }
    }

    return decimalValue;
}
