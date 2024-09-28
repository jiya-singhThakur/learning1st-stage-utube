console.log(2>1);
console.log(2>=1);
console.log(2==1);
console.log(2!=1);

//we should avoid these conversion
console.log("2">1); //true
console.log("02">1); //true


console.log(null>0);   //false
console.log(null==0);  //false
console.log(null>=0);  //true

//comparisons convert null to a number i.e 0
//that's why null>=0 is true and null>0 is false

console.log(undefined>0); //false
console.log(undefined==0); //false
console.log(undefined>=0); //false

//=== it checks value as well as its data type
console.log("2"===2); //false