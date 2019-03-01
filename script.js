/* 1. Write a function that counts the number of occurrence of a word in a paragraph or a sentence.
The function countWords takes a paragraph and word as parameters.
const paragraph = 'I love teaching. If you do not love teaching what else can you love.
I love JavaScript if you do not love something which can give life to your application what else can you love.';
countWords();
6 */

function countWord(paragraph, word) {
    let regex = new RegExp(word, 'ig');
    let count = (paragraph.match(regex) || []).length;
    return count;
}

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
console.log(countWord(paragraph, 'love'));



/* 2. Write a function that takes an array parameter and returns an array of the data types of each item:
const arr = ['Asabeneh', 100, true, null, undefined, {job:'teaching'}];
checkDatatTypes(arr);
["string", "number", "boolean", "object", "undefined", "object"]
const mixedData = ["John", 25, "David", 30, "Sara", 22];
checkDatatTypes(arr);
["string","number","string","number","string","number"]; */

function checkDatatTypes(array) {
    let typeArray = [];
    for (let i = 0; i < array.length; i++) {
        type = typeof array[i];
        typeArray.push(type);
    }
    return typeArray;
}

const arr = ['Asabeneh', 100, true, null, undefined, {job:'teaching'}];
console.log(checkDatatTypes(arr));



/* 3. Create a function that filter ages greater than 18.
const ages = [35, 30, 17, 18, 15, 22, 16, 20];
agesGreaterEighteen();
[35, 30, 22, , 20]; */

function filterAgesOverEighteen(array) {
    let arrayOverEighteen = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 18) {
            arrayOverEighteen.push(array[i])
        }
    }
    return arrayOverEighteen;
}

const ages = [35, 30, 17, 18, 15, 22, 16, 20];
console.log(filterAgesOverEighteen(ages));



/* 4. Write a function that removes an item or items from the middle of the array and replaces them with two items */

function removeMiddleAddTwo(array, item1, item2) {
    array.splice(Math.floor((array.length - 1) / 2), 2 - array.length % 2, item1, item2);
    return array;
}

const fruits = ['apple', 'banana', 'clementine', 'durian', 'elderberry', 'fig', 'grapes', 'honeydew'];
console.log(removeMiddleAddTwo(fruits, 'mango', 'nectarine'));

const vegetables = ['asparagus', 'broccoli', 'cabbage', 'daikon', 'eggplant'];
console.log(removeMiddleAddTwo(vegetables, 'onion', 'parsnip'));



/* 5. Write a function that calculates the average age of the group. 

console.log(averageAge());
22 */

function calcAverageAge(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let average = Math.round(sum / array.length);
    return average;
}

console.log(calcAverageAge(ages));



/* 6. Write a function that can generate a random Finnish car plate number. 
console.log(genCarPlateNum())
AFG-205
console.log(genCarPlateNum())
JCB-586 */

function genCarPlateNum() {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers = '0123456789'
    let carplateArray = [];

    for (i = 0; i < 3; i++) {
        let index = Math.floor(Math.random() * letters.length);
        carplateArray.push(letters[index]);
    }

    carplateArray.push('-');

    for (i = 0; i < 3; i++) {
        let index = Math.floor(Math.random() * numbers.length);
        carplateArray.push(numbers[index]);
    }

    let carplate = carplateArray.join('');
    return carplate;
}

console.log(genCarPlateNum());



/* 7. Write a function that can generate a random Finnish social security number.
console.log(genSocialSecurityNum())
220590-255H
console.log(genSocialSecurityNum())
190395-225J */

function genSSN() {
    let ssnArray = [];
    let numbers = '0123456789'
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    let day = Math.floor(Math.random() * (31 - 1) + 1);
    day = "00" + day;
    day = day.substr(-2);
    ssnArray.push(day);

    let month = Math.floor(Math.random() * (12 - 1) + 1);
    month = "00" + month;
    month = month.substr(-2);
    ssnArray.push(month);

    let year = Math.floor(Math.random() * 99);
    year = "00" + year;
    year = year.substr(-2);
    ssnArray.push(year);

    ssnArray.push('-');

    for (i = 0; i < 3; i++) {
        let index = Math.floor(Math.random() * numbers.length);
        ssnArray.push(numbers[index]);
    }

    let index = Math.floor(Math.random() * letters.length);
    ssnArray.push(letters[index]);

    let ssn = ssnArray.join('');
    return ssn;
}

console.log(genSSN()); // not perfect because it can generate invalid dates (for example February 31st)



/* 8.  The following shopping cart has four products.
Create addProduct, removeProduct and editProduct functions to modify the shopping cart.
Add , remove, edit at least one product
const shoppingCart = ['Milk','Coffee','Tea', 'Honey'];

addProduct( "Meat");
["Milk", "Coffee", "Tea", "Honey", "Meat"]

editProduct(3, "Sugar" );
["Milk", "Coffee", "Tea", "Honey", "Meat"]

removeProduct(0);
["Coffee", "Tea", "Sugar", "Meat"]

removeProduct(3);
["Coffee", "Tea", "Sugar"] */

function addProduct(array, item) {
    array.push(item);
    return array;
}

function editProduct(array, index, item) {
    array.splice(index, 1, item);
    return array;
}

function removeProduct(array, index) {
    array.splice(index, 1);
    return array;
}

const shoppingCart = ['Milk','Coffee','Tea', 'Honey'];
console.log(addProduct(shoppingCart, 'Meat'));
console.log(editProduct(shoppingCart, 3, 'Sugar'))
console.log(removeProduct(shoppingCart, 0));



/* 9. The following todoList has three tasks.
Create addTask, removeTask and editTask functions to modify the todoList.
Add, remove or edit at least one task.
const todoList = [
{
	task:'Prepare JS Test',
	time:'3/1/2019 12:00',
	completed:true
	
},
{
	task:'Give JS Test',
	time:'3/1/2019 1:00',
	completed:false
	
},
{
	task:'Sprint Retrospective',
	time:'3/1/2019 3:00',
	completed:false
	
}] */

function addTask(array, task) {
    let currentDate = new Date();
    day = currentDate.getDate();
    month = currentDate.getMonth();
    year = currentDate.getFullYear();
    hour = currentDate.getHours();
    minute = "00" + currentDate.getMinutes();
    minute = minute.substr(-2);
    date = `${day}/${month}/${year} ${hour}:${minute}`;
    
    let object = {
        task: task,
        time: date,
        completed: false,
    };

    array.push(object);
    return array;
}

function removeTask(array, index) {
    array.splice(index, 1);
    return array;
}

function editTask(array, index, property, value) {
    array[index][property] = value;
    return array;
}

const todoList = [
    {
        task:'Prepare JS Test',
        time:'3/1/2019 12:00',
        completed:true
    },

    {
        task:'Give JS Test',
        time:'3/1/2019 1:00',
        completed:false
    },

    {
        task:'Sprint Retrospective',
        time:'3/1/2019 3:00',
        completed:false
    }
]

console.log(addTask(todoList, 'Complete JS Test'));
console.log(removeTask(todoList, 3));
console.log(editTask(todoList, 2, 'completed', true));



/* 10. Write a function that checks if the items of an array are unique.
const arrOne = [1, 4, 6, 2, 1];
checkUniqueness(arrOne);
False
const arrTwo = [1, 4, 6, 2, 3]
checkUniqueness(arrTwo);
true */

function checkUniqueness(array) {
    let counts = [];
    for(var i = 0; i <= array.length; i++) {
        if(counts[array[i]] === undefined) {
            counts[array[i]] = 1;
        } 
        
        else {
            return false;
        }
    }
    return true;
}

const arrOne = [1, 4, 6, 2, 1];
const arrTwo = [1, 4, 6, 2, 3];
console.log(checkUniqueness(arrOne));
console.log(checkUniqueness(arrTwo));



/* 11.  Write a function that filters users who have scoresGreaterThan85, 
Write a function that addUser to the user array only if the user exists. 
Write a function that addUserSkill which can add skill to a user only if the user exist. 
Write a function which editUser if the user exist in the users array.

const users = [
{
	name:'Brook', 
	scores:75,
	skills:['HTM', 'CSS', 'JS'],
	age:16
},
{
	name:'Alex', 
	scores:80,
	skills:['HTM', 'CSS', 'JS'],
	age:18
}, 
{
	name:'David', 
	scores:75,
	skills:['HTM', 'CSS'],
	age:22
}, 
{
	name:'John', 
	scores:85,
	skills:['HTM'],
	age:25
},
{
	name:'Sara',
	scores:95,
	skills:['HTM', 'CSS', 'JS'],
	age: 26
},
{
	name:'Martha', 
	scores:80,
	skills:['HTM', 'CSS', 'JS'],
	age:18
},
{
	name:'Thomas',
	scores:90,
	skills:['HTM', 'CSS', 'JS'],
	age:20
}
]; */

function filterScoresOver85(array) {
    let topStudents = [];
    for (i = 0; i < array.length; i++) {
        if (array[i].scores > 85) {
            topStudents.push(array[i]);
        }
    }
    return topStudents;
}

function addUser(array, )

const users = [
    {
        name:'Brook', 
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    }, 
    {
        name:'David', 
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    }, 
    {
        name:'John', 
        scores:85,
        skills:['HTM'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
];

console.log(filterScoresOver85(users));