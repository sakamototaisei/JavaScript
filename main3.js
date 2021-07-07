// const test = 'テスト';
// const test_2 = 'です';

// console.log(test.concat(test_2));

// const test_3 = 'テストです';

// console.log(test_3.replace('テスト', 'ファイト'));

const myMap = new Map();

myMap.set('id', 3);
myMap.set('name', '本田');

console.log(myMap);

console.log(myMap.get('name'));

const valueList = myMap.values();

for( value of valueList){
  console.log(value);
}

