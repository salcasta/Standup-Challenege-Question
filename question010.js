// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

//str -> no funny biz
//str -> words are reversed, opposite case

function transformStr(str){
   //split str " " -> reverse -> join
   //split str "" -> map l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()
   let reversedStr = str.split(' ').reverse().join(' ')
   let transformedStr = reversedStr.split('').map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('')
   // return transformedStr
   return str.split(' ').reverse().join(' ').split('').map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('')
}


//OR


const transformStr = str => str.split(' ').reverse().join(' ').split('').map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('')

console.log(transformStr("Example Input"), "iNPUT eXAMPLE")
console.log(transformStr("Leon Noel"), "nOEL lEON")