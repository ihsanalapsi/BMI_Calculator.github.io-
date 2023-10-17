document.getElementById("calculate").addEventListener("click", calculatekg);


function calculatekg() {

    var kilo = document.getElementById("kilo").value;
    var boy  = document.getElementById("boy").value;
    var meter = boy / 100; // Convert height from centimeters to meters
    var BMI = kilo / (meter * meter);
    var resultElement = document.getElementById("result");
    
    switch (true) {
        case BMI < 18:
            resultElement.innerHTML = `${BMI.toFixed(2)} <br> <br>Thinness`;
            break;
        case BMI >= 18 && BMI <= 24.9:
            resultElement.innerHTML = `${BMI.toFixed(2)} <br><br> Perfect weight`;
            break;
        case BMI >= 25 && BMI <= 29.9:
            resultElement.innerHTML = `${BMI.toFixed(2)} <br><br> Overweight`;
            break;
        case BMI >= 30 && BMI <= 34.9:
            resultElement.innerHTML = `${BMI.toFixed(2)} <br><br> Obesity of the first degree`;
            break;
        case BMI >= 35 && BMI <= 39.9:
            resultElement.innerHTML = `${BMI.toFixed(2)} <br><br> Second degree obesity`;
            break;
        case BMI >= 40:
            resultElement.innerHTML = `${BMI.toFixed(2)} <br><br> Serious obesity`;
            break;

    } 
}