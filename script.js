function firstNonRepeatedChar(str) {
  // Step 1: Create an object to store the count of each character
  const charCount = {};

  // Step 2: Iterate through each character in the string to count occurrences
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Step 3: Iterate through the string again to find the first non-repeated character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // Step 4: If no non-repeated character is found, return null
  return null;
}

// Example usage with user input
const input = prompt("Enter a string"); // Prompt the user to enter a string
alert(firstNonRepeatedChar(input));     // Display the first non-repeated character or null
