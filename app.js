// importing file system module and writing to file
const fs = require('fs');

fs.writeFileSync('app.txt', 'Hello there, you have created a new text file');

// data types and funtions
let name = 'Kaushal';
let age = '25';
let hasHobbies = true;

function userInfo(userName, userAge, userHasHobby){
    return ` Name is ${userName}, age is ${userAge} and user has hobbies? ${userHasHobby} `;
}

console.log(userInfo(name, age, hasHobbies));

// arrow function
const product = (a , b) => a*b;
console.log(product(5, 6));

const product = () => 5*5;
console.log(product());

//object
const student = {
    name: 'Kaushal',
    age: 25,
    course: 'BackEnd',
    intro() {
        console.log('Hii, My name is '+ this.name + ' age is '+ this.age + ' and course is ' + this.course)
    }
}

student.intro();




//*****ARRRAY*****

const fruits = ['apple', 'banana', 'grapes', 'mango'];

fruits.push('oranges');
for(let i of fruits){
    console.log(i);
}
console.log(fruits.map(j => 'fruit is '+ j));

const fruits = ['apple', 'oranges' , '', 'mango', '', 'lemon'];
console.log(fruits.map(item => {
    if(item === ''){
        return 'empty string';
    }else {
        return item;
    }
}));

//mcq
const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

let { key1, key3} = obj1



key1 = 20;

key3 = 123

console.log(key1, key3)

