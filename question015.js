/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
*/

// P arr of nums
// R arr in order of odd nums with even nums in their original position
// E 
// sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
// sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])

function sortArray (arr) {
    //filter -> sort
    const oddNums = arr.filter(n => n % 2 !== 0).sort((a,b) => a - b)
    //map
    return arr.map(n => n % 2 === 0 ? n : oddNums.shift())
}


// Going from linear time to constant time (Using sort(b - a) and pop

function sortArray (arr) {
    //filter -> sort
    const oddNums = arr.filter(n => n % 2 !== 0).sort((a,b) => b - a)
    //map
    return arr.map(n => n % 2 === 0 ? n : oddNums.pop())
}