 const result = async function(){   
   const abc = await fetch('https://fakestoreapi.com/products');
   const data = await abc.json();
   console.log(data);
}

result();


// result().then((abc)=>{
//     console.log(abc);
//     return abc.json();
    
// }).then((data2)=>{
//    console.log(data2);
   
// })


