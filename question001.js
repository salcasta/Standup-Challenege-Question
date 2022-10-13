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



// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

//num with no funny biz
//log each num or the appr word
//n = 5 -> 1, 2, fizz, 4, buzz
//n = 9 -> 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz
//n = 15 ->  1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz

function fizzBuzz(num){
   //for loop from 1 to num 
   for(let i = 1; i <= num; i++){
     //conditional 
     //if num % 3 && num % 5 === 0 -> fizzBuzz
     if(i % 3 === 0 && i % 5 === 0){
       console.log('fizzBuzz')
     }else if(i % 3 === 0){
       console.log('fizz')
     }else if( i % 5 === 0 ){
       console.log('buzz')
     }else{
       console.log(i)
     }
     //if num % 3 === 0 -> fizz
     //if num % 5 === 0 -> buzz
     //log the num
   }
 }
 
 fizzBuzz(5) //1, 2, fizz, 4, buzz
 fizzBuzz(9) //1, 2, fizz, 4, buzz, fizz, 7, 8, fizz
 fizzBuzz(15) //1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz