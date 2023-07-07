const originalArray = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];
const transformedArray = originalArray.map((element) => {
  if (element === ' ') {
    return 'empty string';
  }
  return element;
});

console.log(transformedArray);


// What will be the output of this

// Example - 1 ->

// const obj1 = {'key1': 1}
// const obj2 = { ...obj1}
// if(obj2 === obj1){
// console.log('same objects')
// }
// else{
// console.log('different objects')

// }

// Example 2 ->

const obj1 = {'key1': 1 , 'key2' : 2}
const obj2 = { ...obj1, key1: 1000}
console.log(obj1)
console.log(obj2)