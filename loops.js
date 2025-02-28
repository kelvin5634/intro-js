// loops
let startingPoint = 40

while(startingPoint<400){
    console.log("Loop number" + startingPoint)
    startingPoint = startingPoint +3
}

let studentMarks = [23, 45, 67, 89, 91, 56, 78, -90, 100, 45, 67]
console.log(studentMarks[1])

let index = 0
while(index < studentMarks.length){
    let currentMarks = studentMarks[index]
    if(currentMarks < 0 || currentMarks > 100 || typeof currentMarks !== "number"){
        console.log("Invalid marks")
    }
    else if(currentMarks>= 80){
        console.log("Is Grade A")
    }
    else if(currentMarks >= 65){
        console.log("Is Grade B")
    }

    else if(currentMarks >= 50){
        console.log("Is Grade C")
    }
    else if(currentMarks >=40){
        console.log("Is Grade D")
    }
    else {
        console.log("Is Grade E")
    }

    index  = index+1
}