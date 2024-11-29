// Event Loop........

console.log("Hi Everyone");

setTimeout(()=>{
    console.log("I am async callback3");
    
},3000)

// console.log("We are going to be the last...");

setTimeout(()=>{
    console.log("I am async callback0");
    
},0)

console.log("We are going to be the last...");