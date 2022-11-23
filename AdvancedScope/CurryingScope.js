
// Currying Scope
// We can separate argument list in individual function and call it together.



let person={
    name:"Vishakha",
    age:21,
    hometown:"Nagpur",
    array:[true,24,"pink"]
}
function currying(obj){
    return function(key){
        return obj[key]
    }
}


// {
//     return function(a){
//         return function(b){
//             return a*b
//         }
//     }
// }



