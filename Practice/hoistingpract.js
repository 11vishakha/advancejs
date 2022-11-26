

//HOISTING => Hoisting is a behaviour in which a function or a variable can be used before declaration.

//using test before declaring
// console.log(test)  
// var test;  //undefined


//variable hoisting

r=9
console.log(r)
var r  //9

// var q             //it is still undefined
// console.log(q)
// q=90 //not defined

// but when, 
o=90;
console.log(o)
var o


//program to print text
greet()
function greet(){
    console.log("hello,how are you ?")
}

