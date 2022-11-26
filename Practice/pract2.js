

//Declaring a function

function hello() {
    console.log("hey,there I am a simple function")
}
hello()

//function parameter
function greet(name){
    console.log("hello"+" "+name)
}
greet("sahil")

//adding two numbers using function
//declaring a function

function add(a,b){
    console.log(a+b)
}
add(5,6)

//function return
function add(num1,num2)
{
    return num1+num2
}
let result = add(89,89)
console.log("The sum is: "+" "+result)

//program to find the square of a number
//function is declared inside the variable

let x = function (num){
   return num*num
}
console.log(x(4));
//let y=x(4)
// console.log(y)




//VARIABLE SCOPE
//program to print a text

let v ="hello"
function pop(){
    console.log(v)
}
pop()


//program to show the change in global variable
let p="hop on"
function mop(){
    p =6
}
console.log(p)
mop()
// console.log(p) //6

