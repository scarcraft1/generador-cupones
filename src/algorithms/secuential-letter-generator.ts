export function SecuentialLetterGenerator(previousCoupon: string): string {
  let result = '';
  const letters = previousCoupon.split('');
  if (letters.every(c => c === 'Z')) {
    throw 'Last coupon reached!!';
  }
  for (let idx = letters.length - 1; idx >= 0; idx--) {
    const letter = letters[idx];
    if (letter !== 'Z') {
      result = String.fromCharCode(previousCoupon.charCodeAt(idx) + 1) + result;
      result = previousCoupon.slice(0,idx) + result;
      break;
    }
    result = `A${result}`;
  }
  return result;
}
