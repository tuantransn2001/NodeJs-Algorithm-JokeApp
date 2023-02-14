function miniMaxSum(arr) {
  const copyArr = [...arr].sort((a, b) => a - b);

  const minSum =
    copyArr.reduce((accumulator, currentNum, currentIndex) => {
      return accumulator + currentNum;
    }, 0) - copyArr[copyArr.length - 1];
  const maxSum =
    copyArr.reduce((accumulator, currentNum, currentIndex) => {
      return accumulator + currentNum;
    }, 0) - copyArr[0];

  return [minSum, maxSum];
}

module.exports = { miniMaxSum };

// ? Ideas 1
// * Step 1: Sort arr from ascending -> Pending
// * Step 2 :
// * => + MiniSum = All Ele does not includes last el
// * => + MaxSum = All Ele does not includes first el
