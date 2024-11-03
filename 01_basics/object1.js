//INTERVIEW QUESTION 
//object ko declare karne ke 2 tareke hai litral and constructor 
//singleton ->>constructor se jo banega wo hamesa singelton hi hoga
//litrals ke tarah jab declare karte h toh singleton nahii banta hai

//Object.create

//object literals
const mySym=Symbol("key1")  //ek symbol lena h usko define karna h usko keys ki tarah act karna h or print karana h 

const JsUser={
    name:"Hitesh",
    age:18,
    "full name":"hitesh rasia",
    [mySym]:"mykey1", //sahi sentax for smbol
    location:"jaipur",
    email:"hitesh121@gmail.com",
    isLoggedIn:false,
    lastLoginDay:["Monday","saturday","tuesday"]
}
console.log(JsUser.email)  //these are two ways to access the value 0r pairs
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser["email"])
console.log(JsUser.mySym)
console.log(typeof JsUser.mySym) //string it is not of symbol type
console.log(JsUser[mySym]) //sahi sentax symbol ko print karane ke liye

JsUser.email="hitesh@chatgpt001.com" //js user ke andar email ko change kar dega

Object.freeze(JsUser) //freeze se abb koi change nahi hoga
JsUser.email="hitesh@microsoft.com"
console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello js user");
}
JsUser.greetingTwo=function(){
    console.log(`Hello js user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());