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


function magic(){
     let x = 100  // 101
     return ()=> console.log(++x)
}

let z = magic() // z = ()=> console.log(++x)
z() // 101
z() // 102
z() // 103