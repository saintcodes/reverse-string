function reverseString(str) {
  //initiates a variable to hold the reveresed String
  let reversedString = ""
  //starting position (index is equal to the length of the string minus 1. i.e., if the string is "dog", it would start at
  // 0 1 2
  // D O G
  //the 2nd index (three characters minus 1), iteration would continue until index is greater than or equal to zero
  //each iteration will decrement the index position by one)
  for (let i=str.length-1; i>=0; i--) {
    //adds the value of the current indexed position of the string to the reversedString variable
    reversedString += str[i]
  }
  //returns the reversedString variable
  return reversedString
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

