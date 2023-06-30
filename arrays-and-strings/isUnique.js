/**
Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures?

Example1:
Input: "asdfg"
Output: "true"

Example2:
Input: "ASDFGA"
Output: "false"


Example 3:
Input: "Aa"
Output: "true"
 */


function isUnique(str) {
    let letters = new Set();

    for(let i = 0; i < str.length; i++) {
        if(letters.has(str[i])) {
            return false;
        }

        letters.add(str[i]);
    }

    return true;
}