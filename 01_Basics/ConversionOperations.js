let score = "33"
let score1 = "33abc"
let score2 = null
let score3 = undefined

console.log(typeof score)

let scoreinNumber = Number(score)
console.log(typeof scoreinNumber)


let scoreinNumber1 = Number(score1)
console.log(typeof scoreinNumber1)// it will convert and give output as NaN
console.log(scoreinNumber1)


let scoreinNumber2 = Number(score2)
console.log(typeof scoreinNumber2)//it will convert and give Output as O
console.log(scoreinNumber2)


let scoreinNumber3 = Number(score3)
console.log(typeof scoreinNumber3)//it will convert and give Output as O
console.log(scoreinNumber3)

