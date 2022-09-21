const student ={
    name:'rahyan',
    age:'25',
    movies:'dabbe'
}
/* object to jsonstring */
const studentJSON = JSON.stringify(student);
/* console.log(studentJSON); */

/* converting jsonstring to object */
const studentobj = JSON.parse(studentJSON);
/* console.log(studentobj); */

//add a product by using ...spread operator 

const products =[
    {name:'macbook',price:10000,brand:'apple',color:'red'},
    {name:'phone',price:15000,brand:'apple',color:'golden'},
    {name:'sunglass',price:5000,brand:'rayban',color:'Ash'},
    {name:'watch',price:4500,brand:'rolex',color:'golden'}

];
/* add new product without changing the previous array*/

const newProduct ={name:'akil',price:10000,brand:'dev',color:'choclate'};
 const newproductAdd =[...products,newProduct];
 /* console.log(newproductAdd); */

/* deleting the phone objcet from the array by using filter method  */
const remaining = products.filter(product => product.name!='phone');
console.log(remaining);