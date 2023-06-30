/**
Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 */


// solution 1:
function containsDuplicate(arr) {
    let numSet = new Set();
    for(let i = 0; i < arr.length - 1; i++) {
        numSet.add(arr[i]);

        if(numSet.has(arr[i + 1])) return true;
    }

    return false;
}

// Using frequency counter
// solution 2:
function containsDuplicate2(arr) {
    const freq = freqCounter(arr);

    for(let num in freq) {
        if(freq[num] > 1) {
            return true;
        }
    }

    return false;
}

function freqCounter(arr) {
    const freq = {};

    for(let num of arr) {
        if(num in freq) {
            freq[num]++;
        } else {
            freq[num] = 1;
        }
    }

    return freq;
}