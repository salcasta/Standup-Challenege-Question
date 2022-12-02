//Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

// P given a str, reverse it without using reverse()

// R str

// E 
// reverseChall('canyoureversethis')
// reverseChall('987654321')

//P

function reverseChall (str) {
    //convert str to an array
    let answer = []
    let arr = str.split('')

    //loop through arr, pop the arr and push that result to the answer arr
    while (arr.length) {
      answer.push(arr.pop())
    }
    
    return answer.join('')
}