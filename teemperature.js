function temperature(){
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f;
}

function temperature1(){
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var f = document.getElementById("fahrenheit1").value;
    var c = (f - 32) * 5/9
    document.getElementById("celsius1").value = c;
}