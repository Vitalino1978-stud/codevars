// Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string, the longest possible,
//   containing distinct letters - each taken only once - coming from s1 or s2.

// function longest(s1, s2) {

//   const arr_s1 = s1.split('');

//   const arr_s2 = s2.split('');

//   let result = [];

//   for (el of arr_s1)  {

//     if (!result.includes(el)) 

//       result.push(el)

//   }

//    for (el of arr_s2)  {

//     if (!result.includes(el)) 

//       result.push(el)

//   }

//   return result.sort().join('');

// // your code

// }

// Implement a function likes :: [String] -> String, 
// which must take in input array, containing the names of people who like an item.
// It must return the display text as shown in the examples:
// function likes(names) {
//   let i = 0;
//   const len = names.length;
//   if(len == 0) {
//     return 'no one likes this';
//   }
//   if (len == 1) {
//     return `${names[i]} likes this`;
//   }
//   if (len == 2) {
//     return `${names[i]} and ${names[i+1]} like this`;
//   }
//   if (len == 3){
//     return `${names[i]}, ${names[i+1]} and ${names[i+2]} like this`
//   }
//   if (len >= 4){
//     return `${names[i]}, ${names[i+1]} and ${len-2} others like this`
//   }
// }

// likes [] -- must be "no one likes this"
// likes ["Peter"] -- must be "Peter likes this"
// likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others

// Write a function that takes in a string of one or more words,
//   and returns the same string, but with all five or more letter
// words reversed(Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"

// function spinWords(){

//   const words = string.split(' ');

//   let wordWithFive = words[];

//   for (const word of words) {

//     if(word.length >= 5){

//       words.push(word);

//     }

//   }

//   const spinned = words.reverse();

//   //TODO Have fun :)

//   return spinned;

//}

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.

// function alphabetPosition(text) {

//   let i=0;

//   const arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//   const arr_text = text.split('');

//   let result_arr = [], ind=null;

//   for (const letter of arr_text)  {

//     ind = arr_en.indexOf(letter.toLowerCase());

//     if (ind != -1) {

//       result_arr.push(ind+1);

//     }

//   }

//   return result_arr.join(' ');

// }