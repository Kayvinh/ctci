/**
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 */

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;     // early out, if not same length



    return str1.split("").sort().join("") === str2.split("").sort().join("");
}

// Freq Count Solution
function validAnagram2(s, t) {
    if(s.length !== t.length) return false;
    const count = freqCounter(s);

    for(let char of t) {
        if(count[char] === undefined) {
            return false;
        } else {
            count[char]--;
        }
    }

    for(let char in count) {
        if(count[char] !== 0) {
            return false;
        }
    }

    return true;
}

function freqCounter(str) {
    const freq = {};
    for(let char of str) {
        if(char in freq) {
            freq[char]++;
        } else {
            freq[char] = 1;
        }
    }

    return freq;
}