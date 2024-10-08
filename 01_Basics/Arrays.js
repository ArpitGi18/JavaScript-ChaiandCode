// const myArr = [1,2,3,4,5]
// console.log(myArr)

const marvel_heroes = ["thor" , "Ironman"]
const dc_heroes = ["superman" , "batman"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes)

const all_heroes1 = [...marvel_heroes, ...dc_heroes]
console.log(all_heroes1)