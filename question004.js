// Get the mean of an array

/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

getAverage([2,2,2,2]),2)
getAverage([1,2,3,4,5,]),3);
getAverage([1,1,1,1,1,1,1,2]),1)
*/

//P arr, whole num, non neg, never empty arr
//R whole num rounded down
//E getAverage([2,2,2,2]),2)
//  getAverage([1,2,3,4,5,]),3);
//  getAverage([1,1,1,1,1,1,1,2]),1)
//P


function getAverage (arr) {
    // sum up the array
    let sum = arr.reduce((acc, cv) => acc + cv, 0)
    
    // divide sum by number of elements in the array, make sure answer is rounded down
    let avg = Math.floor(sum / arr.length)
    
    return avg
}