const result = fetch('https://fakestoreapi.com/products');

// console.log(result);

// const result2 = result.json();
result.then((res)=>{
     console.log(res);
     return res.json();
     
}).then((data)=>{
   console.log(data);
   
})


