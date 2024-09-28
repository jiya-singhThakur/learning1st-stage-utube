//stack is used in all primitive types
//stack ke andar copy  milta h
//heap is used in all non-primitive types.
//heap se copy nahi milta original value ka reference milta h
//heap ke andar ham changes or update original value mai hi karte h

let myYoutubeChannel="jiyasinghdotcom"
let anothername=myYoutubeChannel
anothername="chaiaurcode"
console.log(myYoutubeChannel); //jiyasinghdotcom
console.log(anothername); //chaiaurcode

let userOne={
  email:"user@google.com",
  upi:"user@ybl"
}

let userTwo=userOne
userTwo.email="hitesh@google.com"
console.log(userOne.email); //hitesh@google.com
console.log(userTwo.email); //hitesh@google.com