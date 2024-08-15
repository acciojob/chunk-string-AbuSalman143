function stringChop(str, size) {
  // Return an empty array if the input string is null or size is not a positive number
  if (str === null || size <= 0) {
    return [];
  }

  const result = [];
  
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(JSON.stringify(stringChop(str, size)));
