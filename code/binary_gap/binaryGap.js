function solution(N) {
  let binary = N.toString(2);
  let maxGap = 0;
  let gap = 0;

  for (let digit of binary) {
    if (digit === "0") {
      gap++;
    } else {
      maxGap = Math.max(maxGap, gap);
      gap = 0;
    }
  }

  return maxGap;
}
