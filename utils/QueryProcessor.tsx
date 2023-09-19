export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }else if (query.toLowerCase().includes("what is your andrew id")) {
    return "ruimingg";
  }else if (query.toLowerCase().includes("what is your name")) {
    return "Ruiming Gu";
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const maxMatch = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
  if (maxMatch) {
    const x: number = parseInt(maxMatch[1]);
    const y: number = parseInt(maxMatch[2]);
    const z: number = parseInt(maxMatch[3]);
    return (Math.max(x, y, z)).toString();
  }

  const multiplyMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multiplyMatch) {
    const x: number = parseInt(multiplyMatch[1]);
    const y: number = parseInt(multiplyMatch[2]);
    return (x*y).toString();
  }

  const squareMatch = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)/);
  if (squareMatch) {
    const numbers = squareMatch.slice(1); // Get all the captured numbers
    const result = [];
  
    for (const x of numbers) {
      const num = parseInt(x);
      const isSquare = Number.isInteger(Math.sqrt(num));
      const isCube = Number.isInteger(Math.cbrt(num));
  
      if (isSquare && isCube) {
        result.push(num);
      }
    }
    if (result.length > 0) {
      return result.join(", ");
    }
  }
    
  return "";
}
