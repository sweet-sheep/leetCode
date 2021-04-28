// 插入排序
// 从未排序的数组中取得一个值 依次插入已排序的数组
function insertSort(arr) {
  //
  let sortArr = [];
  arr.forEach((num) => {
    for (let i = sortArr.length; i >= 0; i--) {
      if (i == 0 || sortArr[i - 1] < num) {
        sortArr.splice(i, 0, num);
        break;
      }
    }
  });
  return sortArr;
}
// 另一种写法
function insertSort1(arr) {
  //直接改变自己数组的
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = temp;
  }
  return arr;
}

let Arr = Array.from(
  {
    length: 10000
  },
  (v, i) => ~~(Math.random() * 10000)
);

console.time("插入排序");
let sortArr = insertSort1(Arr);
console.timeEnd("插入排序");
console.log(sortArr);
