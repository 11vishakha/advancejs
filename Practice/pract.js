

// Different types of function defination
// Defined by Expression
let f = function prac(){

    console.log("hello, I am defined by expression")

}
f()


// Anonymous function
let e = function(){
  console.log("hii, I am function without name i.e I am an anonymous function")
}
e()

//Arrow function
let c = () =>{console.log("I am defined by a fat arrow for this i don't need the keyword function or name")}
c();


//CALL BY VALUE & REFERENCE
//call by value:When we pass primitive variable as parameter value then it is call by  value.
function look(a){
    console.log("hey yo,I will be called by value in parent thesis "+a)
}
let cl=look(7);


//call by reference: When we pass non-primitive (object/array) as a parameter then we can called call by reference.
function bye(){
    console.log(s)
}
let s =[78,32,2]
bye(s)

function fun(){
    console.log(v)
}
let v=[89,"heii"]
fun(v)

function gun(){
    console.log(d)
}
let d=["ek","do","teen"]
gun(d)


//CALL BACK FUNCTION
//call back function: When we pass function as parameter then, it is called as a call back function.
/*  function seen(msg){
   console.log("seen");
   console.log(msg)
}
function pop(heyyo){
   console.log("msg2")
   heyyo("calling heyyo")
}
pop(seen)

function knot(hola){
    console.log("tieing knott")
    console.log(hola)
}
function tie(yaa){
   console.log("red tie")
   yaa("blue tie")
}
tie(knot)*/

//function
function greet(name,callBack){
   console.log("HI" +" "+name)
   callBack()
}
//callback function
function callMe(){
    console.log("I am a callback function")
}
//passing function as an parameter
greet("Tommy", callMe)

//PROGRAM with SetTimeout()
//program that shows the delay in execution
function gun(){
    console.log("hello world")
}
function sayName(name){
    console.log("Hello" +" "+name)
}
//calling the function
setTimeout(gun,2000);    // here,2000 milisecondes(2seconds)
sayName("james")
