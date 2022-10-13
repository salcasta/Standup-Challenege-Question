/*
Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

P given a num, print out 1 to num, whole number, !negative
R if num % 3 === 0 return 'fizz',if num % 5 === 0 return 'buzz', if num % 3 && num % 5 === 0 return 'fizzbuzz'
E console.log(fizzbuzz(6))
  console.log(fizzbuzz(10))
  console.log(fizzbuzz(15))
P
*/

function fizzbuzz(num) {
    for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
     } else if (i % 5 === 0) {
        console.log('buzz')
     } else if (i % 3 === 0) {
        console.log('fizz')
     } else {
        console.log(i)
     }
    }
}