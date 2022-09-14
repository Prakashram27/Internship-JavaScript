// import { user,printUserName} from "./day4add.js"  // Normal Exporting method 


// var user1 = new user ("Prakash", "Ramu"); // using construction and function by exporting normal method
// console.log(user1)
// printUserName(user1)  

//   BY THE DYNAMIC IMPORT METHOD

import ("./day4add.js").then(module =>{
    console.log(module)
})




import ("./day4add.js").then(({user,printUserName}) =>{
    var user1 = new user ("Prakash", "Ramu");
    printUserName(user1) 
    var user2 = new user ("Arun", "Vijay");
    printUserName(user2) 
    var user3 = new user ("Adolf", "Hitler");
    printUserName(user3) 
})






