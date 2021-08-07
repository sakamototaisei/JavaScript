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

const preview = document.forms.form_test1.preview;

document.forms.form_test1.image_file.addEventListener('change', e =>{
//  console.log(e.target.files[0]);
  const uploadFile = e.target.files[0];

  //表示 FileReader
  const reader = new FileReader();
  reader.addEventListener('load',()=>{
    preview.src = reader.result; //Base64
    console.log(preview.src);
  });
  reader.readAsDataURL(uploadFile);
});
