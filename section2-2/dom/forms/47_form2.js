// const formTest1 = document.getElementById('form_test1');
// console.log(formTest1);

const formTest = document.forms;
console.log(formTest);

const formTest1 = document.forms.form_test1;
console.log(formTest1);

const formTestYourName = document.forms.form_test1.your_name;
console.log(formTestYourName);

const formTestYourNameValue = document.forms.form_test1.your_name.value;
console.log(formTestYourNameValue);

formTestYourName.addEventListener('input',()=>{
  let yourNameValue = document.getElementById('your_name_value');
  yourNameValue.textContent = formTestYourName.value.length;
})




// const formTest2 = document.forms.form_test2;
// console.log(formTest2);
