//array is an object in simple language it is a datatype in 
//which there is a collection of multiple items in a single variable . 
//they are resizeable .and can have a mix of different type of element
// INTERVIEW QUESTION -> arrays in javascript in copy operation they make shallow copy 
//shallow copy of  an object is a copy whoes property shares same refrence point
//(jo bhi change karega original array mai bhi change hoga)
// deep copy whose property does not share the shame property.

//declaration of array
const myArr = [0,1,2,3,4,5]
const myHerroes=["shaktman","marvel","naag"]
const myArr2=new Array(1,2,3,4,5)
console.log(myArr[1]);

//array methods
myArr.push(6)
myArr.pop()
myArr.unshift(9) //starting mai 9 add kardega baki sab ek ek place shift ho jayega
myArr.shift() //starting value ko gayab kar dega jase 9 gayab ho jayega

console.log(myArr.includes(9)); //it will give false boolean type
console.log(myArr.indexOf(9)); //-1 as it doesnt exist

const newArr=myArr.join()


console.log(myArr); // [0,1,2,3,4,5]
console.log(newArr); // 0,1,2,3,4,5 change hua hai type "STRING" bann gaya

//method -> slice ,splice

console.log("A", myArr);    // A[0,1,2,3,4,5]
const myn1 =myArr.slice(1,3) //[1,2]
console.log(myn1);

console.log("B", myArr);

const myn2=myArr.splice(1,3)
console.log("C",myArr);  //[0,4,5]
console.log(myn2); 

//splice operation original array mai manipulate ho jatta h. uttane portion range haat jata h array se