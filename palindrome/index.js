const word = "HH".toLowerCase();
const reversed = word.split("").reverse().join("").toLowerCase();
console.log(reversed === word ? `${word} is the same when reversed` : `${word} is not the same when reversed`);