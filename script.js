/* 1. Write a function that counts the number of occurrence of a word in a paragraph or a sentence.
The function countWords takes a paragraph and word as parameters.
const paragraph = 'I love teaching. If you do not love teaching what else can you love.
I love JavaScript if you do not love something which can give life to your application what else can you love.';
countWords();
6 */

function countWord(paragraph, word) {

    // in order to use a parameter as the pattern for a regular expression, you need to use a RegExp as below:
    let regex = new RegExp(word, 'ig');

    // return the matches as an array
    let matches = paragraph.match(regex);

    // if you don't use the logical OR as below, the function breaks when there's no matches 
    let count = (matches || []).length;

    return count;
}

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
console.log(countWord(paragraph, 'banana'));



/* 2. Write a function that takes an array parameter and returns an array of the data types of each item:
const arr = ['Asabeneh', 100, true, null, undefined, {job:'teaching'}];
checkDatatTypes(arr);
["string", "number", "boolean", "object", "undefined", "object"]
const mixedData = ["John", 25, "David", 30, "Sara", 22];
checkDatatTypes(arr);
["string","number","string","number","string","number"]; */

function checkDatatTypes(array) {

    // create empty array to store data types
    let typeArray = [];

    // loop through the array, checking the data types and pushing the result to typeArray
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

    // create empty array to store the ages over 18
    let arrayOverEighteen = [];

    // loop through the array, checking if the values are over 18, and pushing those that are to arrayOverEighteen
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

    // Math.floor((array.length - 1) / 2) --> this gives the correct starting point for both odd and even lengths
    // 2 - array.length % 2 --> this gives 2 - 1 = 1 for odd lengths and 2 - 0 = 2 for even lengths
    // item1 and item2 are those to add
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

function calcMeanAge(array) {

    // initialize sum
    let sum = 0;

    // loop through the array, adding each value to the sum
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }

    // divide by the number of items to get the mean
    let mean = Math.round(sum / array.length);

    return mean;
}

console.log(calcMeanAge(ages));



/* 6. Write a function that can generate a random Finnish car plate number. 
console.log(genCarPlateNum())
AFG-205
console.log(genCarPlateNum())
JCB-586 */

function genCarPlateNum() {

    // define letters and numbers
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers = '0123456789'

    // and create empty array for the car plate number
    let carplateArray = [];

    // push three random letters to carplateArray
    for (i = 0; i < 3; i++) {
        let index = Math.floor(Math.random() * letters.length);
        carplateArray.push(letters[index]);
    }

    // push '-' to carplateArray
    carplateArray.push('-');

    // push three random numbers to carplateArray
    for (i = 0; i < 3; i++) {
        let index = Math.floor(Math.random() * numbers.length);
        carplateArray.push(numbers[index]);
    }

    // join the array into a string
    let carplate = carplateArray.join('');

    return carplate;
}

console.log(genCarPlateNum());



/* 7. Write a function that can generate a random Finnish social security number.
console.log(genSocialSecurityNum())
220590-255H
console.log(genSocialSecurityNum())
190395-225J */

function genSSN1() {

    // declare empty array to hold SSN
    let ssnArray = [];
    
    // get a random day (1-31)
    let day = Math.floor(Math.random() * (31 - 1) + 1);

    // add initial 0 and substring the last two characters (to make sure you get 01 instead of 1, etc)
    day = "0" + day;
    day = day.substr(-2);

    // push day to ssnArray
    ssnArray.push(day);

    // do similar for a random month (01-12) 
    let month = Math.floor(Math.random() * (12 - 1) + 1);
    month = "0" + month;
    month = month.substr(-2);
    ssnArray.push(month);

    // do similar for a random year ending (00-99)
    let year = Math.floor(Math.random() * 99);
    year = "00" + year;
    year = year.substr(-2);
    ssnArray.push(year);

    // push '-'    
    ssnArray.push('-');

    // define numbers and letters
    let numbers = '0123456789'
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // add 3 random numbers
    for (i = 0; i < 3; i++) {
        let index = Math.floor(Math.random() * numbers.length);
        ssnArray.push(numbers[index]);
    }

    // add a random letter
    let index = Math.floor(Math.random() * letters.length);
    ssnArray.push(letters[index]);

    // join array into a string
    let ssn = ssnArray.join('');

    return ssn;
}

console.log(genSSN1()); // not perfect because it can generate invalid dates (for example February 31st)



function genSSN2() {
    
    // declare empty array to hold SSN
    let ssnArray = [];
    
    // get current date
    currentDate = new Date();

    // generate random date within the past ~100 years (3 * 10^12 milliseconds)
    randomDate = new Date(currentDate.getTime() - Math.random() * 3000000000000);

    // get day from randomDate, concatenate with initial 0, substring last two characters (to get 01 and not 1, etc)
    let day = '0' + randomDate.getDate();
    day = day.substr(-2);

    // push day to ssnArray
    ssnArray.push(day);

    // do similar for the month (adding one because January is 00)
    let month = '0' + (randomDate.getMonth() + 1);
    month = month.substr(-2);
    ssnArray.push(month);

    // do similar for the year (two 0s for years like 1900)
    let year = '00' + randomDate.getYear();
    year = year.substr(-2);
    ssnArray.push(year);

    // push '-'    
    ssnArray.push('-');

    // define numbers and letters
    let numbers = '0123456789'
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // add 3 random numbers
    for (i = 0; i < 3; i++) {
        let index = Math.floor(Math.random() * numbers.length);
        ssnArray.push(numbers[index]);
    }

    // add a random letter
    let index = Math.floor(Math.random() * letters.length);
    ssnArray.push(letters[index]);

    // join array into a string
    let ssn = ssnArray.join('');

    return ssn;
}

console.log(genSSN2());



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

    // add item at the end
    array.push(item);

    return array;
}

function editProduct(array, index, item) {

    // remove 1 item at specified index, add item instead
    array.splice(index, 1, item);

    return array;
}

function removeProduct(array, index) {

    // remove 1 item at specified index
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

    // default date for new task: current date
    let currentDate = new Date();
    day = currentDate.getDate();
    month = currentDate.getMonth();
    year = currentDate.getFullYear();
    hour = currentDate.getHours();
    minute = "00" + currentDate.getMinutes();
    minute = minute.substr(-2);
    date = `${day}/${month}/${year} ${hour}:${minute}`;
    
    // default completed status for new task: false
    let object = {
        task: task,
        time: date,
        completed: false,
    };

    // add to end of array
    array.push(object);

    return array;
}

function removeTask(array, index) {

    // remove 1 item from specified index 
    array.splice(index, 1);

    return array;
}

function editTask(array, index, property, value) {

    // take object at specified index, name property, assign new value
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

    // loop through array
    for (let i = 0; i < array.length; i++) {

        // if the index of the first and last ocurrence of a value are not the same, the items are not unique
        if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
            return uniqueness = false;
        }
    }

    // if the loop ran its course without returning false, then the items are unique
    return uniqueness = true;
}

function checkUniqueness2(array) {

    // loop through array items
    for (let i = 0; i < array.length; i++) {

        // for each array item i, compare it with the items that come after (to avoid double comparisons)
        for (let j = i + 1; j < array.length; j++) {

            // if at any point two values are the same, then the items are not unique
            if (array[i] == array[j]) {
                return false;
            }
        }
    }

    // if all the loops ran their course without returning false, then the items are unique
    return true;
}

const arrOne = [1, 4, 4, 2, 3];
const arrTwo = [1, 4, 6, 2, 3];
console.log(checkUniqueness(arrOne));
console.log(checkUniqueness(arrTwo));
console.log(checkUniqueness2(arrOne));
console.log(checkUniqueness2(arrTwo));


/* 11.  Write a function that filters users who have scoresGreaterThan85, 
Write a function that addUser to the user array only if the user does not exist. 
Write a function that addUserSkill which can add skill to a user only if the user exist. 
Write a function which editUser if the user exist in the users array.

const users = [
{
	name:'Brook', 
	scores:75,
	skills:['HTML', 'CSS', 'JS'],
	age:16
},
{
	name:'Alex', 
	scores:80,
	skills:['HTML', 'CSS', 'JS'],
	age:18
}, 
{
	name:'David', 
	scores:75,
	skills:['HTML', 'CSS'],
	age:22
}, 
{
	name:'John', 
	scores:85,
	skills:['HTML'],
	age:25
},
{
	name:'Sara',
	scores:95,
	skills:['HTML', 'CSS', 'JS'],
	age: 26
},
{
	name:'Martha', 
	scores:80,
	skills:['HTML', 'CSS', 'JS'],
	age:18
},
{
	name:'Thomas',
	scores:90,
	skills:['HTML', 'CSS', 'JS'],
	age:20
}
]; */

function filterScoresOver85(array) {

    // declare an empty array for the top students
    let topStudents = [];

    // loop through array
    for (i = 0; i < array.length; i++) {

        // if the student has a high score, push to topStudents
        if (array[i].scores > 85) {
            topStudents.push(array[i]);
        }
    }

    return topStudents;
}

function addUser(array, object) {

    // loop through array
    for (let i = 0; i < array.length; i++) {

        // if at any point the name of the new object is found in the array, the username already exists
        if (array[i].name === object.name) {
            console.log('That username already exist.');

            return array;
        }
    }

    // if the loop ran its course and the username doesn't exist yet, push object
    array.push(object);
    return array;
}

function addUserSkill(array, name, skill) {
    // loop through array
    for (let i = 0; i < array.length; i++) {

        // if the username exists, push skill to skills array
        if (array[i].name === name) {
            array[i].skills.push(skill);
            return array;
        }
    }

    // if the loop ran its course without encountering the specified username, the username does not exist
    console.log('That username does not exist.');

    return array;
}

function editUser(array, name, property, value) {
    // loop through array
    for (let i = 0; i < array.length; i++) {

        // if the username exists, assign specified value to specified property
        if (array[i].name === name) {
            array[i].property = value;
            return array;
        }
    }

    // if the loop ran its course without encountering the specified username, the username does not exist
    console.log('That username does not exist.');

    return array;
}


const users = [
    {
        name:'Brook', 
        scores:75,
        skills:['HTML', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex', 
        scores:80,
        skills:['HTML', 'CSS', 'JS'],
        age:18
    }, 
    {
        name:'David', 
        scores:75,
        skills:['HTML', 'CSS'],
        age:22
    }, 
    {
        name:'John', 
        scores:85,
        skills:['HTML'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTML', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha', 
        scores:80,
        skills:['HTML', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTML', 'CSS', 'JS'],
        age:20
    }
];

xurxe = {
    name:'Xurxe', 
    scores:90,
    skills:['HTML', 'CSS'],
    age:29
}

console.log(filterScoresOver85(users));
console.log(addUser(users, xurxe));
console.log(addUserSkill(users, 'Xurxe', 'JS'));
console.log(editUser(users, 'Lala', 'scores', 95));