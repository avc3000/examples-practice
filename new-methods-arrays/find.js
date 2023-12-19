// Method FindLast
const numbers = [10, 35, 55, 70, 80, 100, 20, 30];
const res = numbers.findLast((x) => {
  console.log("x = " + x);
  return x === 100;
});
console.log(res);

// Method FindLastIndex
const numbers2 = [10, 35, 55, 70, 80, 100, 20, 30];
const foundIndex = numbers2.findLastIndex((x) => {
  console.log("x = " + x);
  return x === 100;
});
console.log(foundIndex);

// Method toReversed
const numbers3 = [1, 2, 3, 4, 5];
const reversedNumbers = numbers3.toReversed();
console.log(numbers3);
console.log(reversedNumbers);

// Method toSorted
const numbers4 = [11, 5, 7, 23, 12, 10];
const sortedNumbers = numbers4.toSorted((a, b) => a - b);
console.log(numbers4);
console.log(sortedNumbers);

// Method toSpliced
const tasks = ["task 1", "task 2", "task 3"];
const tasksSpliced = tasks.toSpliced(1, 1, "task 4", "task 5");
console.log(tasks);
console.log(tasksSpliced);

// Method With
const flowers = ["Lily", "Daisy", "Iris", "Lotus", "Allium"];
const updatedFlowers = flowers.with(4, "Diana");
console.log(flowers);
console.log(updatedFlowers);
