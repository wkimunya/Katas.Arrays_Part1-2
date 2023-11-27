function sortByLength(array) {
    // Return an array containing the same strings, ordered from shortest to longest
    return array.sort((a, b) => a.length - b.length);
  }
  
  // Example usage:
  const inputArray = ["Telescopes", "Glasses", "Eyes", "Monocles"];
  const result = sortByLength(inputArray);
  console.log(result);
  