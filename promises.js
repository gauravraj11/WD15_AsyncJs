const promise = new Promise((resolve, reject)=>{

    var a = false;  
    if(a){
        resolve({"name":"gfg", "sub": "mern"});
    }  else {
        reject({"status":"404"});
    }
   
    console.log("Promise Run ho gya....");
    
})

console.log(promise);

promise.then((res)=>{
    console.log("lagta h promise fullfill ho gya...");
    // console.log(res.name);
    return res.name; 
}).
then((res1)=>{
    console.log(res1);
    
})
.catch((err)=>{
    console.log("Ye API bekar hi hai shayad.......");
    console.log(err);
    
    
})