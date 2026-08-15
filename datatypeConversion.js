let score = "33"
// score = "33abc"
console.log(typeof score);
let valInNumber = Number(score)
console.log(typeof valInNumber)
console.log(valInNumber)

// "33" -> 33
// "33abc' -> NaN
// true -> 1; false -> 0 and vice-verse

let isLoggedIn = 0
console.log(typeof isLoggedIn)
let convBoolean = Boolean(isLoggedIn)
console.log(typeof convBoolean)
console.log(convBoolean)

//empty string -> false
//non-empty string -> true