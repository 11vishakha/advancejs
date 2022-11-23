
//Closure Scope
// a closure gives you access to an outer function's scope from an inner function.

let a;
function close(){
    a = 567;
    console.log(a)
}
close()  
console.log("after execution value:"+a)




function foo(x) {
    function bar(y) {
      console.log(x + y);
    }
  
    bar(2);
  }
  
  foo(2); 







