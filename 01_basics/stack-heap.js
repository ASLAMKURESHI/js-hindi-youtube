// stack(primitive ) :- give the copy of original value
// heap(non-primitive) :- give the reference of original value

let myYoutubeName = "aslamKureshi"
let anotherName = "rahisKureshi"

console.log(anotherName);
console.log(myYoutubeName);


let userOne = {
    email : "user@google.com" ,
    upi   : "user@axl" 

}

let userTwo = userOne;
let userThree = userOne.email;
console.log(userTwo.email);
userOne.email = "aslam@google.com"
console.log(userTwo.email);
console.log(userThree);
