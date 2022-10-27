/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

//P given a string with char, special char, num and spaces. Also ignore capitalization
//R return a string with only '(' or ')' only
//E
//encodeDupes("din")      =>  "((("
//encodeDupes("recede")   =>  "()()()"
//encodeDupes("Success")  =>  ")())())"
//encodeDupes("(( @")     =>  "))(("

//P

function encodeDupes (str) {
    // toLowerCase
    // turn str to arr using split => map => indexof === lastIndexOf ? '(' : ')'
    // return arr to str using join
    
    return str.toLowerCase()
              .split('')
              .map((l, i, a) => a.indexOf(l) === a.lastIndexOf(l) ? '(' : ')' )
              .join('')
  }

  