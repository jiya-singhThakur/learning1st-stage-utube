//To declare a string
const name="hitesh"
const repoCount=50
console.log(name +repoCount+"Value");  //older way not generally used 

console.log(`Hello my name is ${name}and my repo count is ${repoCount}`);  //modern way 
//to declare a string in a new way backticks
const gameName=new String ('hitesh-hc') 

console.log(gameName[0]); //h
console.log(gameName.__proto__); //it returns empty{} 

console.log(gameName.length); //8
console.log(gameName.toUpperCase()); //HITESHHC
console.log(gameName.charAt(2)); //t
console.log(gameName.indexOf('t')); //2

const newString =gameName.substring(0,4)
console.log(newString); //hite
chr
const anotherString=gameName.slice(-8,4)
console.log(anotherString); //ite

 const ewStringONE= "  hitesh   "
 console.log(newStringOne);
 console.log(newtringOne.trim());