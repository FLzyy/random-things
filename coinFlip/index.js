const { randomInt } = await import('node:crypto');

const flipCoin = (repeat) => {
    const options = ["Head", "Tails"]

    for (let i = 1; i <= repeat; i++) {
        randomInt(0, 2, (err, n) => {
            if (err) { throw err; }
            console.log(`Flip ${i}: ${options[n]}`)
        })
    }
}

flipCoin(24);