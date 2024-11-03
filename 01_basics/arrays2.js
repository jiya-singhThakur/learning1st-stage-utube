const marvel_heros=["thar","itonman","spiderman"]
const dc_heros=["superman","flash","batman"]
marvel_heros.push(dc_heros)
console.log(marvel_heros); 

const allHeros=marvel_heros.concat(dc_heros) //push peration existing array par hi exist karta h lekin
console.log(allHeros); //concat return karta h nayya array
                       
//spread operator(we generally dont use concate instead we use spread)
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros) 

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array) 

console.log(Array .isArray("Hitesh")) //false
console.log(Array .from("Hitesh")) //['h',''i','t','e','s','h']
console.log(Array .from({name:"Hitesh"}))  //(INTERVIEW QUESTION)
// [] it will return empty array we have to tell keys ka array bane , yah value ka array banaye 

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)); //it returns a new array from set of elements

