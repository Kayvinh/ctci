/**
 * There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.

Examples:
    pale, ple -> true

    pales, pale -> true

    pale, bale -> true

    pale, bake -> false
 */

function oneEditAway(str1, str2) {
    let difference;
    let strLength = Math.abs(str1.length - str2.length);

    if (str1.length === str2.length) {
        difference = oneReplace(str1, str2);
    } else if (str1.length + 1 === str2.length || str1.length - 1 === str2.length) {
        difference = oneInsertOrRemove(str1, str2);
    } else if (strLength > 1) {
        return false;
    }

    if (difference > 1) return false;

    return true;
}

function oneReplace(str1, str2) {
    let difference = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) difference++;
    }

    return difference;
}

function oneInsertOrRemove(str1, str2) {
    let difference = 0;
    const count = freqCounter(str1);

    for (let char of str2) {
        if (count[char] === undefined) {
            difference++;
        } else {
            count[char]--;
        }
    }

    for (let char in count) {
        if (count[char] !== 0) {
            difference++;
        }
    }

    return difference;
}

function freqCounter(str) {
    const freq = {};

    for (let char of str) {
        if (char in freq) {
            freq[char]++;
        } else {
            freq[char] = 1;
        }
    }

    return freq;
}


// solution 2 using multiple pointers:
function oneEditAway2(s1, s2) {
    let m = s1.length;
    let n = s2.length;

    // If difference between lengths is
    // more than 1, then strings can't
    // be at one distance
    if (Math.abs(m - n) > 1) return false;

    // Count of edits
    let count = 0;
    let i = 0, j = 0;

    while (i < m && j < n) {
        // If current characters don't match
        if (s1[i] !== s2[j]) {
            if (count === 1) return false;

            // If length of one string is more, then only possible edit
            // is to remove a character
            if (m > n) {
                i++;
            } else if (m < n) {
                j++;
            } else {        // If lengths of both strings is same
                i++;
                j++;
            }

            // Increment count of edits
            count++;
        }

        // If current characters match
        else {
            i++;
            j++;
        }
    }

    // If last character is extra in any string
    if (i < m || j < n) {
        count++;
    }

    return count === 1;
}