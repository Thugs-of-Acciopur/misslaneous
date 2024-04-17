// Hof

// function hello(){
//     return ()=> console.log("hii")
// }


// let x = hello()
// console.log(x)
// x()


// function sum(f, g){ 
//     // f = ()=> 10, g = ()=> 20
//     return ()=> console.log(f() + g())
// }


// const f1 = ()=> 10
// // console.log(f()) // 10
// const g1 = ()=> 20

// let x = sum(f1,g1) //  x = ()=> console.log(f() + g())
// console.log(x) // ()=> console.log(f() + g())
// x() // 30


// let a = 100 // 101 102 103

// function inc(){
//     a++
// }

// inc() 
// inc() 
// inc() 
// console.log(a) 


// function magic(){
//      let x = 100  // 101
//      return ()=> console.log(++x)
// }

// let z = magic() // z = ()=> console.log(++x)
// z() // 101
// z() // 102
// z() // 103


// closures =>  function + scope around function


function outer(){
     let x = 100 
     return ( function inner1(){
          x = x+100 
          let y = 500
          console.log("inner 1",x)
          return function inner2(){
               x = x+200
               console.log("inner 2",x,"y",y)
          }
     })
}

// console.log(outer())
let in1 = outer()
console.log(in1)
// in1()
let in2 =  in1()
console.log(in2)
in2()