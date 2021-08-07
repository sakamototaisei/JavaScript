// サニタイズ(エスケープ処理)

function escapeHtml(str) {
  str = str.replace(/&/g, '&amp;');
  str = str.replace(/</g, '&lt;');
  str = str.replace(/>/g, '&gt;');
  str = str.replace(/"/g, '&quot;');
  str = str.replace(/'/g, '&#39;');
  return str;
}

//element.innerHTML = '<span>' + escapeHtml(value) + '</span>';

//郵便番号
const pattern = /^\d{3}-?\d{4}$/g;
const postCode1 = '121-4440'; 
const postCode2 = '121-444';

const result1 = postCode1.match(pattern);
console.log(result1);

const result2 = postCode2.match(pattern);
console.log(result2);

//メールアドレス
const address = 'test@test.com';
const regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;

if (regexp.test(address)) {
  console.log('正しいメールアドレスです');
} else {
  console.log('間違ったメールアドレスです');
}