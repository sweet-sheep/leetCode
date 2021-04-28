// 选择排序
// 遍历一次记录最小位置 然后和最前面的替换
function selectionSort(arr) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j <= len; j++) {
      arr[j] < arr[minIndex] && (minIndex = j);
    }
    // 交换当前位置为最小元素
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

let Arr = Array.from(
  {
    length: 1000
  },
  (v, i) => ~~(Math.random() * 10000)
);

console.time("for");
selectionSort(Arr);
console.timeEnd("for");
console.log(Arr);
