// This is a comment 
/*
This is a multiline comment
*/

// console.log('rose')

// debugger

// console.log('Tom')

//Write a small program to help me dress my cat for walks.
//Create a variable for my cat. Should not change.
//Create a variable for the weather. Should change.
//Create a conditional statement to pick out my cats outfit

//Variables store info

// var, let and const
// var -> do not use
//Global 
const cat = 'rose'
let weather 
weather = 'sunny'
// if(weather === 'snowing'){
//     // debugger
//     console.log(`put ${cat} in a sweater`)
// }

// debugger

if(weather === 'snowing'){
    //debugger;
    console.log(`put ${cat} in a sweater`);
} else if(weather === 'sunny') {
    //debugger;
    console.log(`take ${cat} for a walk`);
} else {
    console.log(`put ${cat} in a raincoat`);
}

 switch(weather){
     case 'sunny':
         console.log(`take ${cat} for a walk`);
         break;
     case 'snowing':
         console.log(`put ${cat} in a sweater`);
         break;
    default:
        console.log(`put ${cat} in a raincoat`);
 }


let mood = 'hungry'
let food = 'cookies'
if(mood === 'hungry'){
    food = 'brownies'
    console.log(mood)
    console.log(`eat ${food}`)
}

console.log(food)



