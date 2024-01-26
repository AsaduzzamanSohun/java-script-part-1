// =================== all data types ==================== //

let myName = 'Asaduzzaman Sohun'
console.log(myName + " : " + typeof(myName));

let myNum = 21331312
console.log(myNum + " : " + typeof(myNum));

let myBool = true
console.log(myBool + " : " + typeof(myBool));

let nullValue = null;
console.log(nullValue + " : " + typeof(nullValue));

let undef;
console.log(undef + " : " + typeof(undef));

let bigNum = 21787812787238178388888888127871827818281287127981287127892137n
console.log(bigNum + " : " + typeof(bigNum));

let sym = Symbol("&, !")
console.log(sym, typeof(sym));

let myArray = [1, 5, 'Sohun', false, [3.14, 8], 2.8 ]
console.log(myArray + " : " + typeof(myArray));

let myObject = new Object();
console.log(typeof(myObject));


// ===============================================================================================================


myArray = [1, 2, 3.1416, 4, 'Asad', 'Sohun', 'javascript', 2024, 'mern-stack'];
console.log(myArray);

let arrayLength = myArray.length;
console.log(arrayLength);

console.log(myArray[4]);
myArray[4] = 'Asaduzzaman';
console.log(myArray[4]);
console.log(myArray);

// ------------------------------------------------ For/While Loop --------------------------------------------------------------- /

for(let i = 0; i <= 39; i++){
    console.log('Count:', i);
}

let x = 0;
while(x <= 50){
    console.log("Count:", x);
    x++;
}

for(let i = 58; i <= 98; i++){
    console.log(i);
}

for(let even = 412; even <= 456; even++){
    if(even % 2 == 0){
        console.log(even);
    }  
}

for(let odd = 581; odd <= 623; odd++){
    if(odd % 2 == 1){
        console.log(odd);
    }
}


let whatILearned = ['HTML', 'CSS', 'JavaScript', 'API', 'React', 'Firebase', 'Node.js', 'Express.js', 'MongoDb', 'Next.js'];

for(let index = 0; index < whatILearned.length; index++){
    let item = whatILearned[index]
    console.log(item);
}

let index = 0;
while(index < whatILearned.length){
    let item = whatILearned[index];
    console.log(item);
    index++;
}


for(let i = 30; i <= 86; i++){
    console.log(i);
    if(i == 44){
        break;
    }
}


let bookPrices = [120, 200, 165, 300, 212, 175, 250, 80, 190];

for(let price = 0; price < bookPrices.length; price++){

    let prices = bookPrices[price]

    if(prices > 200){
        continue;
    }
    console.log(prices);
}







