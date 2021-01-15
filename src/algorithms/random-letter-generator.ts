export function RandomLetterGenerator(cuponLength: number): string {
  return Array.from(Array(cuponLength).keys()).map(() => randomLetter()).join('');
}

function randomLetter(): string {
  const charA = 'A'.charCodeAt(0);
  const charZ = 'Z'.charCodeAt(0);
  return String.fromCharCode(Math.random() * (charZ - charA + 1) + charA);
}