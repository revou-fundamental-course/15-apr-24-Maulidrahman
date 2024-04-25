function convertCelciusToFahrenheit(){
    let celciusInput  = document.getElementById("celcius").value;
    let fahrenheit = (celciusInput* 1.8) + 32;
    document.getElementById("fahrenheit").value = fahrenheit;
    
}
function clearInput(){
    document.getElementById("celcius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("celcius2").value = "";
    document.getElementById("fahrenheit2").value = "";
    document.getElementById("result").value = "";
}
function reverseConversion(){
    let fahrenheitInput = document.getElementById("fahrenheit2").value;
    let celcius = (fahrenheitInput - 32) * 0.5;
    document.getElementById("celcius2").value = celcius;
}
function calculateResult(){
    let celciusInputc  = document.getElementById("celcius").value;
    let fahrenheitc = ' S(F\xB0) = (' + celciusInputc + ' (C\xB0) x 9/5) + 32';
     document.getElementById("result").value = "Cara menghitung : " + fahrenheitc; 
}
function calculateResult2(){
    let fahrenheitInputf  = document.getElementById("fahrenheit2").value;
    let celciusf = ' S(C\xB0) = (' + fahrenheitInputf + ' (F\xB0) - 32) * 5/9';
     document.getElementById("result").value = "Cara menghitung : " + celciusf; 
}

let isReverse = true;

function reverse(){
    let cToF = document.getElementById("c-to-f");
    let fToC = document.getElementById("f-to-c");

     if (isReverse) {
        console.log(isReverse);
        fToC.style.display = "block";
        cToF.style.display = "none";
        isReverse = false;
        
       
        
     } else {
        console.log(isReverse);
        fToC.style.display = "none";
        cToF.style.display = "block";
        isReverse = true;
        
        
     }


}

