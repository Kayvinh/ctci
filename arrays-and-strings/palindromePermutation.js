/**
 * Given a string, determine if a permutation of the string could form a palindrome.
 * 
 * Example 1:
 * Input: "code"
 * Output: false
 * 
 * Example 2:
 * Input: "aab"
 * Output: true
 * 
 * Example 3:
 * Input: "carerac"
 * Output: true
 */


function palindromePerm(string) {
    let oddCount = 0;

    const freq = freqCounter(string);

    for(let char in freq) {
        if(freq[char] % 2 !== 0) {
            oddCount++;
        }
    }

    if (oddCount > 1) {
        return false;
    }

    return true;
}

function freqCounter(string) {
    const freq = {};

    for(let char of string) {
        if(char in freq) {
            freq[char]++;
        } else {
            freq[char] = 1;
        }
    }

    return freq;
}