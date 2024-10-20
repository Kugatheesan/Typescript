//Basic generics

// const last = <K> (x:K,y:K,z:K) => {

//     return [x,y,z]
   
//    }
   
//    let first = last<String>("a","b","c")
//        console.log(first)
       

 //multiple Types
 
 let print = <X, Y, Z>(a: X, b: Y, c: Z) => {
    console.log('a is ${typeof a} b is ${typeof a} c is ${typeof c}')
 }

 print(1,"one",true)
 