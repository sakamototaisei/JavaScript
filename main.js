// let test = 'テスト'

// console.log('test');
// test += 123;

// const test = 123;

// console.log(typeof test);

// const array = [1, 2, 3];

// const array_2 = [
//   ["赤", "青", "黄"],
//   ["緑", "紫", "黒"],
// ];

//console.log(array_2[0][2]);

// // オブジェクト　（もの）
// const member = {
//   // キー; バリュー
//   'name': '本田',
//   'height': '170',
//   'hobby': 'サッカー'
// };

// console.log(member.hobby);

// const member_2 = {
//   'honda': {
//     'height': 170,
//     'hobby': 'サッカー'
//   },
//   'kagawa': {
//     'height': 165,
//     'hobby': 'サッカー'
//   }
// };

// console.log(member_2.kagawa.height);

// const member_3 = {
//   '1kumi': {
//     'honda': {
//       'height': 172,
//       'hobby': 'サッカー'
//     },
//     'kagawa': {}
//   },
//   '2kumi': {}
// };

// console.log(member_3['1kumi']['honda']['height']);

const test_1 = 4;
let test_2 = 3;

test_2 += 3;

const test_3 = test_1 + test_2;

console.log(test_3);

// if (条件){
//   条件が真なら実行
// } else {
//   条件が偽なら実行
// }

const height = 91;

// if(height >= 91){
//   console.log('身長は' + height + 'cm以上です');
// }

// if(height < 90){
//   console.log('身長は' + height + 'cm以下です');
// }

if(height !== 90){  //否定 // !==で型も判定
  console.log('身長は' + height + 'cmになっています');
}

// == 一致
// === 型も一致　イコールは3つの方がバグを未然にふけげたりする

const signal = 'blue';

if(signal === 'red'){
  console.log('止まれ');
} else if(signal === 'yellow'){
  console.log('一旦停止');
} else{
  console.log('進む');
}

const speed = 60;

if(signal === 'blue'){
  if(speed >= 60){  //if文の中にif文のことをネストと呼ぶ
    console.log('スピード違反');
  }
}

// and, or

const signal_1 = 'red';
const signal_2 = 'blue';

if(signal_1 === 'red' || signal === 'blue'){
  console.log('赤');
}

// 三項演算子
// if else
// 条件 ? 真 : 偽
// const score = 80;

// const comment = score >= 80 ? 'good' : 'not good';

// console.log(comment);

// 繰り返し
// for 繰り返しの回数を指定
// for in あまり使えわない
// for of (ES6) 使いやすい

const scores = [10,20,30];

// one of them それらの中の一つ
for( score of scores ){
  console.log(score);
}

// オブジェクト {}

// for(初期値;繰り返す条件;増減 ++ --)

for (let i = 0; i <= 10; i++){
  console.log(i);
}

// switch
// if の方が見やすい

const data = 6;

switch(data){
  case 1:
    console.log('1です')
    break;
  case 2:
    console.log('2です')
    break;
  case 3:
    console.log('3です')
    break;
  default:
    console.log('1-3ではありません')
    break;
}
