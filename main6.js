// const postalCode = '123-4567';

const postal = {

  postalCode:'123-4567',

  // this.postalCode　thisはオブジェクト自体と考える
  checkPostalCode(){
    const replaced = this.postalCode.replace('-','').length;
    // const length = replaced.length;

    if(replaced === 7){
      return true;
    }
    return false;
  }
};
// JavaScriptはcamelCase
// HTML/CSS　大文字小文字区別しない snake_case
// 英語　動詞＋名刺
// console.log(postal.checkPostalCode(postalCode));
console.log(postal.checkPostalCode());