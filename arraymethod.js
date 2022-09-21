const products =[
    {name:'macbook',price:10000,brand:'apple',color:'red'},
    {name:'phone',price:15000,brand:'apple',color:'golden'},
    {name:'sunglass',price:5000,brand:'rayban',color:'Ash'},
    {name:'watch',price:4500,brand:'rolex',color:'golden'}

];

/* map:(j condition dibe seita k loop through kore just value gula return kore dibe) */
const brands = products.map(brands =>brands.brand);
/* console.log(brands); */
 
const prices1 = products.map(prices =>prices.price);
/* console.log(prices1) */

/* foreach: (kono value return kore na so bam side e kono varibale declare kroar lage na ) */
/* products.forEach(product => console.log(product))
products.forEach(colors => console.log(colors.color)) */

/* multiple line er khetre forEach */

/* filter: (array return kore so bam pashe ekta variable er moddhe rakhte hoi ar filter er kaj hocche value filter kore return kora)*/
/* compare kortasi jader value 5000 er boro ba soman */
const compare = products.filter(product=>product.price>=5000);
/* console.log(compare); */
/* checking the n word from the name property using the filter method  */
const checkN = products.filter(checkn => checkn.name.includes('n'));
/* console.log(checkN); */

/* find: */
const findN = products.find(findn =>findn.name.includes('n'));
console.log(findN);