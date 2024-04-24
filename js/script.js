function convertCelciusToFahrenheit(){
    var celciusInput  = document.getElementById("celcius").value;
    var fahrenheit = (celciusInput* 1.8) + 32;
    document.getElementById("fahrenheit").value = fahrenheit;
}
function clearInput(){
    document.getElementById("celcius").value = "";
    document.getElementById("fahrenheit").value = "";
}
function reverseConversion(){
    var fahrenheitInput = document.getElementById("fahrenheit").value;
    var celcius = (fahrenheitInput - 32) * 0.5;
    document.getElementById("celcius").value = celcius;
}
function calculateResult(){
    var celciusInputc  = document.getElementById("celcius").value;
     var fahrenheitc = ' S(F\xB0) = (' + celciusInputc + ' (C\xB0) x 9/5) + 32';
     document.getElementById("result").value = "Cara menghitung : " + fahrenheitc; 
}
function calculateResult2(){
    var fahrenheitInputf  = document.getElementById("fahrenheit").value;
     var celciusf = ' S(C\xB0) = (' + fahrenheitInputf + ' (F\xB0) - 32) * 5/9';
     document.getElementById("result").value = "Cara menghitung : " + celciusf; 
}

