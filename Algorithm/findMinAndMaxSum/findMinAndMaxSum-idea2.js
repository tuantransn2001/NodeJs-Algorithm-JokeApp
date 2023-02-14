function miniMaxSum(arr) {
  const copyArr = [...arr];

  let minSum = 0;
  let maxSum = 0;

  for (let index = 0; index < copyArr.length; index++) {
    const currentNum = copyArr[index];
    let sumExceptCurrentEl = 0 - currentNum;

    copyArr.forEach((el) => {
      sumExceptCurrentEl += el;
    });

    switch (index) {
      case 0: {
        maxSum = sumExceptCurrentEl;
      }
      case 1: {
        if (sumExceptCurrentEl >= maxSum) {
          maxSum = sumExceptCurrentEl;
        } else {
          minSum = sumExceptCurrentEl;
        }
      }
    }

    if (sumExceptCurrentEl >= maxSum) {
      maxSum = sumExceptCurrentEl;
    } else if (sumExceptCurrentEl < minSum) {
      minSum = sumExceptCurrentEl;
    }
  }

  return [minSum, maxSum];
}

module.exports = { miniMaxSum };

// ? Idea 2:
// * Step 1: initial minSum = 0 and maxSum = 0
// * Step 2: Loop through arr ->  Calculate Sum without current Num ( sumExceptCurrentNum )
// * index = 0 => maxSum = sumExceptCurrentNum
// * index = 1 => compare maxSum and sumExceptCurrentNum
// *              result: + maxSum > sumExceptCurrentNum => minSum = sumExceptCurrentNum
// * ...
// * Next index: Compare sumExceptCurrentNum with minSum and maxSum
