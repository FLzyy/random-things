const vowels = ['a', 'e', 'i', 'o', 'u' ]
let vowelCount = 0;
const text = "Jam a man of fortune, J will seek my fortune."

for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
        vowelCount++;
    }
}

console.log(`Vowel Count: ${vowelCount}`);