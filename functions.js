// Functions - is a reusable block of codes{}. They create their own scope for variables
//  defining a function -- normal function vs arrow functions

function doSomething(){
    console.log("Block of codes to be executed");
    console.log("Regular function")
}

const doSomethingElse = () =>{
    console.log("Block of codes to be executed");
    console.log("Arrow function")
}

// using/ calling/ invoking functions --- as many times as we want

doSomething(); 
doSomethingElse();

// function to convert money to different currencies depending on the county provided
function convertCurrency(amount, country){
    console.log("Hello my friend from " + country);
    if(country == "USA"){
        console.log("Amount is " + amount/129 + " USD");
}else if(country == "Uganda"){
    console.log("Amount is " + amount*28 + " UGSH");
}else if(country == "Japan"){
    console.log("Amount is " + amount*1.17 + " YEN");
}else{
    console.log("Amount is " + amount + " KES");
}
}

// calling the functions
convertCurrency(2000, "USA");
convertCurrency(2000, "Uganda");
convertCurrency(2000, "Japan");
convertCurrency(543, "japan");
// GLobal scope vs Block space

// write a function that takes a number as an argument and checks if the number is even or odd
// write a function that takes in an array of names, loops through the names changing th to all upercase