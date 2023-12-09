console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i < 100; i++) {
    if (i % 2 == 0) {
        continue;
    } else {
        console.log(i)
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i < 100; i++) { 
    console.log(i)
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    } else {
        if (i % 3 == 0) {
            console.log("FIZZ");
        }
        if (i % 5 == 0) {
            console.log("BUZZ")
        }
    } 
}
   
console.log("EXERCISE 3:")
let i = 1;

while(i <= 100) {
    console.log(i)
    if (i % 3 == 0) {
        console.log("FIZZ")
    }
    if (i % 5 == 0) {
        console.log("BUZZ")
    }
    if ( i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ")
    }
    i++;
}

console.log("EXERCISE-4");

    let value = Math.round((Math.random() * 500));
    let n = Math.round(Math.random() * (500 - 100) + 100);
for(let i = 1; i <= n; i++) {
    if (n == value) {
        console.log(`found ${value}!`);
        break;
    } 
}

console.log(`did not find ${value}...`)

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let m = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= n; i++){
    console.log(i)
    if (i % fizzDivisor == 0) {
        console.log("FIZZ")
    }
    if (i % buzzDivisor == 0) {
        console.log("BUZZ")
    }
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
        console.log("FIZZBUZZ")
    }
}