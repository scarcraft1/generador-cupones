export function SecuentialNumberGenerator(previousNumber: string): number {
  return (Number(previousNumber) + 1);
}