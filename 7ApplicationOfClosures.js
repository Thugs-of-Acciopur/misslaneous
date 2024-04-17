
function bankAccount(){
    let name = "Abhishek"
    let balance = 100000

    function deposit(amount){
        balance += amount
        return balance
    }

    function withdraw(amount){
        // check if u have that balance
        balance -= amount
        return balance
    }

    // return{
    //     depo: deposit,
    //     withd: withdraw
    // }

    return [deposit, withdraw]
}



// name, balance

let amtManagement = bankAccount()
console.log(amtManagement)

console.log(amtManagement[0](1000))
console.log(amtManagement[1](500))

// console.log(amtManagement.depo(1000)) 

// console.log(amtManagement.withd(500))
