//Sum Mixed Array

/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 
*/


function sumMix (arr) {
    //convert every element to a number
    let numArr = arr.map(x => Number(x))
    
    //sum up the array using reduce
    return numArr.reduce((acc, cv) => acc + cv, 0)
}