// lops DSA assignment




for (let i = 1; i <= 15; i++) {
  if (i % 5 === 0) {
    console.log('buzz');
  } else if (i % 3 === 0) {
    console.log('fizz');
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz');
  } else {
    console.log(i);
  }
}

// SUM OF NUMBERS FROM 0-10
let total = 0;
for (let i = 0; i <= 10; i++) {
  total += i;
  console.log(total);
}



// display even and odd numbers between 0-30
const evenNumbers = [];
const oddNumbers = [];
for (let i = 0; i <= 30; i++) {
  if (i % 2 === 0) {
    evenNumbers.push(i);
  } else if (i % 2 !== 0) {
    oddNumbers.push(i);
  }
  if (i === 30) {
    console.log(evenNumbers);
    console.log(oddNumbers);
  }
}

// TRIANGLE
for (let row = 1; row <= 5; row++) {
  let pattern = '*';
  for (let col = 1; col != row; col++) {
    pattern += '*';
  }
  console.log(pattern);
}

console.log('-------------------');
// REVERSE TRIANGLE
for (let row = 1; row <= 6; row++) {
  let pattern = '';
  for (let col = 6; col != row; col--) {
    pattern += '*';
  }
  console.log(pattern);
}


// FINDING THE LARGEST NUMBER IN AN ARRAY
const numbers = [4, 19, 2, 77, 35, 1];
let max = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);

const ss = [1, 2, 3];
function getLastElement(ss) {
  return ss[ss.length - 1];
}

for (let i = 5; i > 0; i--) {
  console.log(i);
}

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

const no = [1, 3, 3];
const addArray = [];
for (let i = 0; i < no.length; i++) {
  addArray.push(no[i] + 2);
}
console.log(addArray);

// function to add the same index fo two arrays together
function addElement(ss, no) {
  const addedArrays = [];
  for (let i = 0; i < no.length && i < ss.length; i++) {
    addedArrays.push(no[i] + ss[i]);
  }
  return addedArrays;
}
console.log(addElement(ss, no));

function minmax(nums) {
  // FINDING THE LARGEST NUMBER IN AN ARRAY
  const minmaxnums = {
    min: nums[0],
    max: nums[0]
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > minmaxnums.max ){ 
      minmaxnums.max  = nums[i];
    }
  }
  // FINDING THE SMALLEST NUMBER IN AN ARRAY
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minmaxnums.min) {
      minmaxnums.min =  nums[i];
    } 
  }
  return minmaxnums;
}
console.log(minmax(no))

// prit only numbers not divisible by 3
for(let i = 0; i <= 10; i++){
  if (i % 3 === 0){
    continue;
  }
  console.log(i)
}

names =['sarah','search','lord','search']
for(let i = 0; i < names.length; i++){
  if( names[i]=== "search"){
    console.log(names.indexOf(names[i]));
    break;
  }
}

function removeEgg(oneArray){
  let count = 0;
  let oneArrayReverse = oneArray.reverse();
    for (let i = 0; i < oneArrayReverse.length; i++){
      if(oneArrayReverse[i] === 'egg'){
        oneArrayReverse.splice(i, 1);
        i--;
        count += 1;
        // console.log(oneArray)
          if (count === 2){
            break;
          }
          continue;
      }
    }

  return oneArrayReverse
}
some = ['egg','egg', 'name','egg','egg', 'lord'];
console.log(removeEgg(some));
// console.log(some.reverse());