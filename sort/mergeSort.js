function mesrgeSort(leftArr, rightArr = []) {
  // 等于 左边数组和右边数组排序
  if (leftArr.length > 1) {
    leftArr = mesrgeSort(leftArr.splice(0, leftArr.length / 2), leftArr);
  }

  if (rightArr.length > 1) {
    rightArr = mesrgeSort(rightArr.splice(0, rightArr.length / 2), rightArr);
  }

  // 两个有序数组合并
  let newArr = [];
  let leftNums = leftArr.length;
  let rightNums = rightArr.length;

  for (var i = 0, j = 0; (i < leftNums) & (j < rightNums); ) {
    if (leftArr[i] < rightArr[j]) {
      newArr.push(leftArr[i++]);
    } else {
      newArr.push(rightArr[j++]);
    }
  }

  i < leftNums && newArr.push(...leftArr.splice(i - leftNums));
  j < rightNums && newArr.push(...rightArr.splice(j - rightNums));

  return newArr;
}

// 尾递归写法
function mesrgeSort1(arr) {
  // 等于 左边数组和右边数组排序
  if (arr.length < 2) {
    return arr;
  }
  return merge(mesrgeSort(arr.splice(0, arr.length / 2)), mesrgeSort(arr));
}

function merge(leftArr, rightArr) {
  // 两个有序数组合并
  let newArr = [];
  let leftNums = leftArr.length;
  let rightNums = rightArr.length;

  for (var i = 0, j = 0; (i < leftNums) & (j < rightNums); ) {
    if (leftArr[i] < rightArr[j]) {
      newArr.push(leftArr[i++]);
    } else {
      newArr.push(rightArr[j++]);
    }
  }

  i < leftNums && newArr.push(...leftArr.splice(i - leftNums));
  j < rightNums && newArr.push(...rightArr.splice(j - rightNums));

  return newArr;
}

let Arr = Array.from(
  {
    length: 10000
  },
  (v, i) => ~~(Math.random() * 10000)
);

console.time("归并排序");
let sortArr = mesrgeSort1(Arr);
console.timeEnd("归并排序");
console.log(sortArr);
