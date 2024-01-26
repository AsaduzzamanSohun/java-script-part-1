// Function problem: 1
function celsiusToFahrenheit(temp){
    celsius = temp;

    let fahrenheit = celsius * (9/5) + 32;

    return fahrenheit;
}

console.log('Temperature:', celsiusToFahrenheit(100), 'F');


// Function problem: 2
function fahrenheitToCelsius(temp){
    fahrenheit = temp;
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

console.log('Temperature:', fahrenheitToCelsius(212), 'C');


// Function problem: 3
function result (marks){

    let grade = marks;

    if(grade <= 100 && grade >= 80){
        return grade + '; Grade: A+';
    }

    else if(grade <= 79 && grade >= 70){
        return grade + '; Grade: A';
    }
        
    else if(grade <= 69 && grade >= 65){
        return grade + '; Grade: A-';
    }
        
    else if(grade <= 64 && grade >= 60){
        return grade + '; Grade: B+';
    }
        
    else if(grade <= 59 && grade >= 55){
        return grade + '; Grade: B';
    }
        
    else if(grade <= 54 && grade >= 50){
        return grade + '; Grade: C';
    }

    else if(grade <= 49 && grade >= 45){
        return grade + '; Grade: D';
    }

    else if(grade <= 44 && grade >= 40){
        return grade + '; Grade: E';
    }

    else if(grade <= 39 && grade >= 0){
        return grade + '; Grade: F';
    }

    else{
        return grade + '; Invalid grade!';
    }

}

console.log(result(85));