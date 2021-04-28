// 希尔排序

// 分组 进行插入排序
// 每次分组 插入
// 比如20个数字 先分十组
// 再分5组
// 再分2组
// 在成1组

function shellSort(arr, gaps = 3) {
  let gap = 1;
  let len = arr.length;
  while (gap < len / gaps) {
    gap = gap * gaps + 1;
  }
  for (; gap >= 1; gap = Math.floor(gap / gaps)) {
    for (let i = gap; i < len; i++) {
      let temp = arr[i];
      let j = i - gap;
      // 组内插入排序
      // 和组内之前的元素相比 如果之前的元素比自己大就往后挪一位
      for (; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      // 直到小于自己的位数时插入在其后面
      arr[j + gap] = temp;
    }
  }
  return arr;
}

let Arr = Array.from(
  {
    length: 10000
  },
  (v, i) => ~~(Math.random() * 10000)
);

console.time("希尔排序 gap3");
let sortArr = shellSort(Array.from(Arr), 3);
console.timeEnd("希尔排序 gap3");
console.log(sortArr);

console.time("希尔排序  gap2");
shellSort(Array.from(Arr), 2);
console.timeEnd("希尔排序  gap2");

console.time("希尔排序  gap4");
shellSort(Array.from(Arr), 4);
console.timeEnd("希尔排序  gap4");

console.time("希尔排序  gap5");
shellSort(Array.from(Arr), 5);
console.timeEnd("希尔排序  gap5");

console.time("希尔排序  gap10");
shellSort(Array.from(Arr), 10);
console.timeEnd("希尔排序  gap10");
