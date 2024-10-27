let score="33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber) //number
console.log( valueInNumber) //if score=33abc athen this will give nan

//"33"(string)->33(number)
//"33abc"->NaN
//true=>1
//false==>0
//null=>NaN
//undefined=>NaN

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

