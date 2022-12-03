const card = "79927398713"

const cardSplitted = card.split('').reverse()
let cardSecondDoubledFixed = [];

for (let i = 1; i < cardSplitted.length + 1; i += 2) {
    let valueToPush = cardSplitted[i] * 2;

    if (valueToPush > 9) {
        valueToPush = Math.floor(valueToPush/10) + (valueToPush%10);
    }
    cardSecondDoubledFixed.push(parseInt(cardSplitted[i-1]))
    cardSecondDoubledFixed.push(valueToPush);
}

const cardSecondDoubledFixedFiltered = cardSecondDoubledFixed.filter(value => {
    return !Number.isNaN(value)
})

if (cardSecondDoubledFixedFiltered.reduce((r,c) => r + parseFloat(c), 0) % 10 === 0) {
    console.log(`${card} is Valid!`)
} else {
    console.log(`${card} is not Valid.`)
}