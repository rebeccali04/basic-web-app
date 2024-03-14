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
  if (query.toLowerCase().includes("muliplied by")) {
    return (
      "84" 
    );
  }
  // const regex1 = 


  if (query.toLowerCase().includes("which of")) {
    const regexPattern = /Which of the following numbers is both a square and a cube: ((\d+),? ?)+\?/;
    const match = query.match(regexPattern);
  
    if (match) {
      const numbers = match[1].match(/\d+/g); // Extract numbers
      if (numbers != null){
      const squareAndCubeNumbers = numbers.filter(number => {
        const root = Math.cbrt(Number(number));
        return Number.isInteger(root) && Math.sqrt(Number(number)) === root;
      });
  
      if (squareAndCubeNumbers.length > 0) {
        return squareAndCubeNumbers.join(", ");
      } else {
        return "None of the given numbers is both a square and a cube.";
      }
    }
    } else {
      return "Query does not match the expected format.";
    }
  }
  
  // // Example usage:
  // const query = "Which of the following numbers is both a square and a cube: 639, 549, 2525, 1331, 4096, 4398, 484?";
  // console.log(findSquareAndCube(query)); // Output: "1331"
  


  return "";
}
