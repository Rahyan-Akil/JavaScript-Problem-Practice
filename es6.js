const friendsAge =[25,35,26,48,50];
const student ={
    name:'rahyan',
    age:'25',
    movies:'dabbe'
}

//accessing data with template string
const accessProperty = `
my name is ${student.name} my age is ${student.age} i live ${student.movies} and my friends age is ${friendsAge[1]}
`;
/* console.log(accessProperty); */

//accessing data with arrow function 
const getSixty = () => 60;
const addSixty = num1 =>num1 + 60;//single parameter so bracket use er dorker nai
const isEven =x => x%2 == 0; // (||)
const addThree = (x,y,z) => x+y+z; // multivalue so parameter use korte hbe 
const doMath = (sum,num2,num3) => {
    sum=num2 +num3;
    return sum; /* single line arrow function er jonnno auto return kore dae multiple line er khetre auto retun kore na return kore dite hoi */ 
}

/* spread operator 
(same jinish k copy kore nae but ager tar sathe kono relation rakhe na orthat ager ta copy kore sathe extra kichu oitar sathe add korte pari  ) */
const previousfriendsAge =[10,20,30,40,50]; 
const newfriendsAge =[...previousfriendsAge];

newfriendsAge.push(99,100);

/* console.log(previousfriendsAge);
console.log(newfriendsAge); */

/* create a new array from an older array and add an element */
const olderArr =['rahyan','shamsi'];
const newArr = [...olderArr,'akil'];
newArr.push('bhuiyan');
console.log(olderArr);
console.log(newArr);
