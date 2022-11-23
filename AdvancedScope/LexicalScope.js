

//Lexical Scope
//The lexical scope allows a function scope to access statically the variables from the outer scopes.

function call(){
    let x=90

    function call2(){
        let y=70
        console.log(x+y)
    }
call2()
}
call()