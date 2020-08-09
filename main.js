

const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('confirm-password')

function showError(input,mes){
    const item = input.parentElement
    item.className = 'form-control error'
    const sms = item.querySelector('small')
    sms.innerText = mes
}
function showSuccess(input){
    const item = input.parentElement
    item.className = 'form-control success'
}
function allInput(inputArr){
   inputArr.forEach(input=>{
       if(input.value === ''){
           showError(input,`${input.id} is required`)
       }else{
           showSuccess(input)
       }
   })
}
function checkValid(input,min,max){
  if(input.value.length <min){
      showError(input,`${input.id} is not least then ${min} characters`)
  }else if(input.value.length>max){
    showError(input,`${input.id} is not less then ${max} characters`)
  }
}
function emailValid(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email.value.trim())){
        showSuccess(email)
    }else{
        showError(email,'email is not valid')
    }
}

function passwordMatch(pass,pass2){
    if(pass.value !== pass2.value){
       showError(pass2,'password does not match')
    }
}
form.addEventListener('submit',function(e){
    e.preventDefault()
  
  allInput([username,email,password,password2])
  checkValid(username,3,15)
  checkValid(password,8,25)
  checkValid(password2,8,25)
  emailValid(email)
  passwordMatch(password,password2)

})

