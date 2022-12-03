// https://github.com/FLzyy/Fizz-Buzz/tree/main/Scripts

function fizzBuzz(n) {
    let out = "";

    if (n % 3 === 0) {out += "Fizz"};
    if (n % 5 === 0) {out += "Buzz"};

    if (out === "") {out = n};
    return out
};

for (let i = 1; i <= 100; i++) {
    console.log(fizzBuzz(i));
};