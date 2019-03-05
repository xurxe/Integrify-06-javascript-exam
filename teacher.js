/* 1. Write a function that counts the number of occurrence of a word in a paragraph or a sentence.
The function countWords takes a paragraph and word as parameters.
const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
countWords();
6 */

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.'

function countWords1(paragraph, word) {
    const formattedParagraph = paragraph.split(' ');
    let count = 0;
    for (let i = 0; i < formattedParagraph.length; i++) {
        if (formattedParagraph[i].includes(word)) {
            count += 1;
        }
    }
    return count;
}

console.log(countWords1(paragraph, 'love')); 
console.log(countWords1(paragraph, 'banana')); 



function countWords2(paragraph, word) {
    let regex = new RegExp(word, 'ig');
    let matches = paragraph.match(regex);
    let count = matches === null ? 0 : matches.length;
    return count;
}

console.log(countWords2(paragraph, 'love')); 
console.log(countWords2(paragraph, 'banana')); 



function countWords3(paragraph, word) {
    const formattedParagraph = paragraph.split(' ');
    let count = 0;
    for (let wrd of formattedParagraph) {
        if (wrd.includes(word)) {
            count += 1;
        }
    }
    return count;
}

console.log(countWords3(paragraph, 'love')); 
console.log(countWords3(paragraph, 'banana')); 