// Example 1 ->

// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// console.log('d');


// Example 2 ->

// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// setTimeout(() => console.log('d'), 0)

// console.log('e');


// Challenge -->

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const printSequence = async () => {
  console.log('a');
  console.log('b');
  await delay(3000);
  console.log('c');
  console.log('d');
  console.log('e');
};

printSequence();

