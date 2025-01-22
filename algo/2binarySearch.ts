export function binarySearch(haystack: number[], needle: number): number {
  let pLeft: number = 0;
  let pRight: number = haystack.length;
  while (pLeft < pRight) {
    let middle: number = Math.floor(pLeft + (pRight - pLeft) / 2);
    let value: number = haystack[middle];
    if (value === needle) {
      return middle;
    }

    if (value > needle) {
      // high is exclusive low is inclusive.
      // thats why pright can be the whole len
      pRight = middle;
    } else if (value < needle) {
      //if not left is not equal to right ever
      pLeft = middle + 1;
    }
  }

  return -1;
  //big o ignores constants
}
console.log(binarySearch([1, 3, 4, 5, 6, 9, 12], 12));
