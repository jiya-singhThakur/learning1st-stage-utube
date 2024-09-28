let value=3
let negValue=-value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2); //power
console.log(2/2);
console.log(2%3); //remainder

let str1="hello"
let str2="hitesh"
let str3=str1+str2
console.log(str3); //hello hitesh

console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+ 2 + 2);  //122
console.log(1 + 2 + "2"); //32

console.log(+true); //1
console.log(+""); //0

let numb1,numb2,numb3  //not a gud approach 
numb1=numb2=numb3= 2 + 2

let gameCounter1=100;
gameCounter1++; //postfix
console.log(gameCounter); //101

let gameCounter2=100;
++gameCounter2; //prefix
console.log(gameCounter); //101


//postfix increment 
let x=3;
const y=x++;
//x is 4; y is 3

//prefix increment
let a=3n;
const b=++a;
//a is 4n; b is 4n