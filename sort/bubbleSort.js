
// 递归注意 不能超出栈！
function bubbleSort(arr, end) {
  if (!end) {
    end = arr.length;
  }
  if (end == 1) {
    return arr;
  }
  let temp;
  // 遍历比较和交换
  for (let i = 0; i < end; i++) {
    if (arr[i + 1] < arr[i]) {
      temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
    }
  }
  // 去除最后一个
  bubbleSort(arr, --end);
}

// 尾递归 优化
function bubbleSort1(arr, end) {
  if (!end) {
    end = arr.length;
  }
  if (end == 1) {
    return arr;
  }
  let temp;
  // 遍历比较和交换
  for (let i = 0; i < end; i++) {
    if (arr[i + 1] < arr[i]) {
      temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
    }
  }
  // 使用return 
  return bubbleSort(arr, --end);
}

// 递归 优化 标记最后一次交换
function bubbleSort2(arr, end) {
  if (!end) {
    end = arr.length;
  }
  if (end == 1) {
    return arr;
  }

  let temp;
  let endTemp = 1;

  // 遍历比较和交换
  for (let i = 0; i < end; i++) {
    if (arr[i + 1] < arr[i]) {
      endTemp = i;
      temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
    }
  }
  // 后面没有交换的都可以不需要再计算了
  return bubbleSort(arr, endTemp);
}

// 双层循环
function bubbleSort3(arr) {
  let temp;
  // 遍历比较和交换
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j + 1] < arr[j]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// 双层循环 + 
function bubbleSort4(arr) {
  let temp;
  let endTemp = 1;
  // 遍历比较和交换
  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j + 1] < arr[j]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }

    }
  }
  return arr;
}

let arr = [2, 3, 5, 1, 34, 56, 23, 34, 21, 34, 8, 9, 11, 23, 45, 55];

//bubbleSort(arr);
bubbleSort3(arr);
console.log(arr);
// 构造一万个数字  然后排序看时间

let Arr = Array.from({
  length: 1000
}, (v, i) => ~~(Math.random() * 10000));

// [0, 1, 2, 3, 4]
console.time("递归")
bubbleSort(Array.from(Arr));
console.timeEnd("递归")

console.time("尾递归")
bubbleSort1(Array.from(Arr));
console.timeEnd("尾递归")

console.time("尾递归 + 尾标记")
bubbleSort2(Array.from(Arr));
console.timeEnd("尾递归 + 尾标记")

console.time("for循环")
bubbleSort3(Array.from(Arr));
console.timeEnd("for循环")