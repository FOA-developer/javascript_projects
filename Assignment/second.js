let awan = [ 1, -3, 4]
/*awan.filter((value) => {
  return value % 2 !== 0;
})
[1,1,3].map((value) => {
 return value + 10;
})
[1,1,3].map( value => value + 10 )*/

const mul = arr => arr[0] * arr[1];
console.log(mul(awan));


arr = [ 1, 2, -3 -4]

const countPositive = (arr) => {
  const positive = [];
  arr.forEach((value) => {
    if (value >= 1){
      positive.push(value);
    }
  })
  let count = positive.length;
  return count;
}

console.log(countPositive(arr));

const increasedArray = (arr) => arr.map(value => value + 2);
const removeEgg = (arr) => arr.filter(value => value === 'egg' ? false : true)

const groceries = ['grapes','egg', 'milk','egg', 'chocolate-powder', 'egg'];
console.log(removeEgg(groceries));



const removeTwo = (arr) => {
  let count = 0;
  let newArr = arr.filter((value) => {
    if (value === 'egg' && count !== 2){
      count++;
      console.log('working')
      return false;
    }
    return true;
  })
  return newArr;
}
console.log(removeTwo(groceries));