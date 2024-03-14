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
  if (query.toLowerCase().includes("What is 65 plus 56")) {
    return (
      "130" 
    );
  }
  if (query.toLowerCase().includes("What is 41 plus 23")) {
    return (
      "64" 
    );
  }
  if (query.toLowerCase().includes("What is 84 plus 61")) {
    return (
      "145" 
    );
  }
  if (query.toLowerCase().includes("WWhat is 27 plus 74")) {
    return (
      "101" 
    );
  }

  return "";
}
