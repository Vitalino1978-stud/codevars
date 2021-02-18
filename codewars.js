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