
let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);

let registeredEarly = false;
let age = 21

if (registeredEarly && age > 18) {
    raceNumber += 1000;
} 
if (registeredEarly && age> 18){
    console.log(`Race at 9:30am, your race number is: ${raceNumber}.`)
} else if (!registeredEarly && age > 18){
    console.log(`Race at 11:00am, your race number is: ${raceNumber}.`)
} else if (age < 18){
    console.log(`Race at 12:30pm, your race number is: ${raceNumber}.`)
} 
