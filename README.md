# anagrams


## Prompt


Given an array of words, return an object with the count of each unique anagram.


## Solution


Sort the letters of each word in the array. If the anagram doesn't exist in the return object, add the anagram as the key and set the count to one. If the anagram does exist, increment the count. Return the object.