function anagrams(arr){
  var word; // used to store word before inserting into object
  var anagramCount = {} // used as return object
  
  // sort letters of each word in array
  for(var i = 0; i < arr.length; i++){
    
    // sort letters: split word, sort array of letters, join back into word
    word = arr[i].split("").sort().join("");
    
    // if word doesn't exist, create key and count one
    if(!anagramCount[word]){
      anagramCount[word] = 1;
    }
    
    // if word exists, increment count 
    else{
      anagramCount[word] += 1;
    }
  }
  
  //return anagramCount
  return anagramCount;
}


var test1 = anagrams(['abc','bca','dog','god','cat','act','pop'])
console.log(test1); // { abc: 2, dgo: 2, act: 2, opp: 1 }

var test2 = anagrams(['car','rac','awesome','sauce'])
console.log(test2); // { acr: 2, aeemosw: 1, acesu: 1 }

var test3 = anagrams(['look','kool','book','koob','a'])
console.log(test3); // { kloo: 2, bkoo: 2, a: 1 }

