// console.log(a)

let a = 10   // global variable
// let a = 50  // redeclaration error


for(let i = 1; i <=1; i++) {
    // console.log("inisde1", a)
    let a = 20
    console.log("inisde2", a) // 20
}

// console.log("outside", a)
// // console.log("outside", b) // ReferenceError: b is not defined