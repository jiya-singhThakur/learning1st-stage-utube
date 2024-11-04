//const tinderUser =new Object() //singelton object
const tinderUser ={} //not a singelton object
tinderUser.id ="123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname: {
      userfullname :{
        firstname:"jiya",
        lastname:"singh rajput"
      }
    }
}
console.log(regularUser.fullname); 
console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a", 4:"b"}

//const obj3={obj1 , obj2 }
//const obj3=Object.assign({},obj1,obj2) //object.assign() static method copies all enumerable 
                  //own properties from one or more source objects to a target object.
const obj3={...obj1,...obj2} //spread operator
console.log(obj3);  

const users=[  //array of obect
  {
    id:1,
    email:"jiya@gmail.com"
  },

]
users[1].email //to access

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //['id,'name','isLoggedIn']
console.log(Object.values(tinderUser));//['123abc','sammy',false]
console.log(Object.entries (tinderUser)); //[['id','123abc'] ,['name','Sammy'],['isLoggedIn',false]]

console.log(tinderUser.hasOwnProperty('isLoggedIn')) //true


