
// 思想
// 以第一位为基准 
// 把大于基准的放在左边
// 把小于基准的放在右边
// 然后用大小交接位置的和 第一位交换
// 把左右两边 递归上述处理

function quickSort(arr, start = 0, end = arr.length){

  let standard = arr[start];
  let standardIndex = start;
  // 递归退出条件
  if(start >= end){
    return arr;
  }

  let temp = null;
  
  for(let i = ++start ; i<= end ;i++){
  temp = arr[start];
  if(arr[i] < standard){
      arr[start++] = arr[i];
      arr[i] = temp;
    }
  }
  temp = arr[standardIndex]
  arr[standardIndex] = arr[--start];
  arr[start] = temp;

  quickSort(arr, standardIndex, start -1 );

  return quickSort(arr, start + 1, end);
}

let Arr = Array.from(
  {
    length: 100
  },
  (v, i) => ~~(Math.random() * 100)
);
let arr = [4,5,3,6,2,7,4,2,4,7,9];

console.time("快排排序");
let sortArr = quickSort(Arr);
console.log(Arr);

