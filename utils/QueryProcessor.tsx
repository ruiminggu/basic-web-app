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
    const x1: number = parseInt(squareMatch[1]);
    const isSquare1 = Number.isInteger(Math.sqrt(x1));
    const isCube1 = Number.isInteger(Math.cbrt(x1));

    const x2: number = parseInt(squareMatch[2]);
    const isSquare2 = Number.isInteger(Math.sqrt(x2));
    const isCube2 = Number.isInteger(Math.cbrt(x2));

    const x3: number = parseInt(squareMatch[3]);
    const isSquare3 = Number.isInteger(Math.sqrt(x3));
    const isCube3 = Number.isInteger(Math.cbrt(x3));


    const x4: number = parseInt(squareMatch[4]);
    const isSquare4 = Number.isInteger(Math.sqrt(x4));
    const isCube4 = Number.isInteger(Math.cbrt(x4));

    const x5: number = parseInt(squareMatch[5]);
    const isSquare5 = Number.isInteger(Math.sqrt(x5));
    const isCube5 = Number.isInteger(Math.cbrt(x5));

    const x6: number = parseInt(squareMatch[6]);
    const isSquare6 = Number.isInteger(Math.sqrt(x6));
    const isCube6 = Number.isInteger(Math.cbrt(x6));

    const x7: number = parseInt(squareMatch[7]);
    const isSquare7 = Number.isInteger(Math.sqrt(x7));
    const isCube7 = Number.isInteger(Math.cbrt(x7));
    
    const result = []

    if (isSquare1 && isCube1) {
      result.push(x1);
    }
    if (isSquare2 && isCube2) {
      result.push(x2);
    }
    if (isSquare3 && isCube3) {
      result.push(x3);
    }
    if (isSquare4 && isCube4) {
      result.push(x4);
    }
    if (isSquare5 && isCube5) {
      result.push(x5);
    }
    if (isSquare6 && isCube6) {
      result.push(x6);
    }
    if (isSquare7 && isCube7) {
      result.push(x7);
    }

    return (result).toString();
  }
    

  return "";
}
