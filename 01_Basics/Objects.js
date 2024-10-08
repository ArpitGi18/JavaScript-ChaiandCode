const mysymbol = Symbol("mysymbol")

const JsUser = {
    name:"Arpit",
    age:29,
    location: ["Hyd","Alld"],
    [mysymbol]:"myvalue"
}

// JsUser.age = 28;

// console.log(JsUser[mysymbol])
// console.log(JsUser.age)

JsUser.greetings = function(){
    console.log("Hello User")
}

JsUser.greetings1 = function(){
    console.log(`Hello User, ${this.name}`)
}

console.log(JsUser.greetings())
console.log(JsUser.greetings1())
