/*
Given an array of integers , Find the Nth smallest element in this array of integers.

Notes
Array/list size is at least 3 .

Array/list's numbers could be a mixture of positives , negatives and zeros .

Repetition in array/list's numbers could occur , so don't Remove Duplications .

nthSmallest({3,1,2} ,2) ==> return (2) 
nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 
*/

//P given arr of num, no funny business, arr will always have at least 3 elements
//R num of the nth smallest in the arr
//E
//nthSmallest({3,1,2} ,2) ==> return (2) 
//nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
//nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
//nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92)

//P


function nthSmallest (arr, n) {
    //sort the arr smallest to largest 
    let sorted = arr.sort((a,b)=>a-b)
    //get the nth num in the arr
    return sorted[n-1]
}

//OR

const nthSmallest = (arr, n) => return arr.sort((a,b)=>a-b)[n-1]