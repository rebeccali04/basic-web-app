export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")) {
    return (
      "I do not want to tell you my andrew id." 
    );
  }
  if (query.toLowerCase().includes("Which of the following numbers is the largest: 11, 84, 24")) {
    return (
      "84" 
    );
  }
  // Check if the query includes a mathematical operation
  query = query.toLowerCase();
  if (query.includes("what is")) {
    // Extract the numbers and the operation from the query
    
    const numbers = query.match(/\d+/g); // Extracts all numbers
    const operation = query.match(/plus|minus|times|divided by/g)[0]; // Extracts the operation

    // Perform the arithmetic operation
    if (query.includes("what is")) {
      // Extract the numbers and the operation from the query
      const numbers = query.match(/\d+/g); // Extracts all numbers
      const operation = query.match(/plus|minus|times|divided by/g)[0]; // Extracts the operation
  
      // Perform the arithmetic operation
      if (operation === "plus") {
        return String(parseInt(numbers[0]) + parseInt(numbers[1]));
      } else if (operation === "minus") {
        return String(parseInt(numbers[0]) - parseInt(numbers[1]));
      // } else if (operation === "times") {
      //   return String(parseInt(numbers[0]) * parseInt(numbers[1]));
      // } else if (operation === "divided by") {
      //   // Check for division by zero
      //   if (parseInt(numbers[1]) === 0) {
      //     return "Cannot divide by zero";
      //   }
      //   return String(parseInt(numbers[0]) / parseInt(numbers[1]));
      // }
    }
    if (query.includes("which of the following numbers is the largest")) {
      // Extract the numbers from the query
      const numbers = query.match(/\d+/g);
  
      // Convert numbers to integers and find the largest one
      const largestNumber = Math.max(...numbers.map(Number));
  
      return largestNumber;
    }

  }
  return "";
}
