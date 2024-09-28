//primitive type
//7 types:String,Number,Boolean,null,Undefined,Symbol,BigInt

//number category
const score=100;
const scoreValue=100.30
//boolean type
const isLoggedIn=false
//null type
const outSideTemp=null 
//undefine type
let userEmail;
//symbol type
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId); //false(they are different as they give different value )
//bigint type
const bigNumber=345671228303489n


//Reference type(Non-Primitive)
//Array,Object,Functions

//array type
const heros=["shaktiman","naagraj","doga"]
//object type
let myObj={
    name:"hitesh",
    age:22,
}
//function type
const myFunction=function(){
    console.log("hello world")
}


//return type of variables (important note)
//primitive datatype
//Number=>number
//Boolean=>boolean
//null=>object
//undefined=>undefined
//symbol=>symbol
//BigInt=>bigint

//Non-primitive data type
//array=>object
//function=>function
//object=>object


//question:- Is javaScript a dynamically or static language?
//Javascript ia a Dynamically typed language because data type 
//will automatically assigned at the time of compilation or code execution

