

function fun()
{
    return function goal(){
        console.log("hello")
        console.log("this is a higher order function")
    }
    
}
fun()()
