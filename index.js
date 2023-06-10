// Crie e pegue os elementos do DOM que seram usados
const body = document.querySelector('body');
const bodyImagem = document.createElement('img')
bodyImagem.src = 'imagens/fall.jpg'
body.append(bodyImagem)


const MainDiv = document.createElement('div');
MainDiv.setAttribute('id','MainDiv')

const formulary = document.createElement('form')
formulary.setAttribute('id','formulary')
formulary.action = '#'
formulary.method = 'get'


const emailDiv = document.createElement('div')
const emailInput = document.createElement('input')
emailInput.type = 'email'
emailInput.placeholder = 'Email'

emailDiv.setAttribute('id', 'emailDiv')
const emailLabel = document.createElement('label')
emailLabel.for = 'emailInput'
emailLabel.textContent = 'Email:'
emailDiv.append(emailLabel,emailInput)


const countryDiv = document.createElement('div')
const countrySelector = document.createElement('select')
countrySelector.setAttribute('id', 'countrySelectors')

countryDiv.setAttribute('id','countryDiv')
const countryLabel = document.createElement('label')
countryLabel.for = 'countryInput'
countryLabel.textContent = 'Country:'

const Brazil = document.createElement('option')
Brazil.textContent ='Brazil'
Brazil.value = 'BR'
const BRCode = /^\d{8}$/

const USA = document.createElement('option')
USA.textContent = 'USA'
USA.value = 'USA'
const USACode = /^\d{4}$/
countrySelector.append(Brazil,USA)


countryDiv.append(countryLabel,countrySelector)

const ZipDiv = document.createElement('div')
const ZipInput = document.createElement('input')
ZipInput.type = 'text'
ZipInput.placeholder = 'Zip Code'
ZipDiv.setAttribute('id','ZipDiv')
const ZipInputLabel = document.createElement('label')
ZipInputLabel.for = 'ZipInputInput'
ZipInputLabel.textContent = 'Zip Code:'
ZipDiv.append(ZipInputLabel,ZipInput)


const passwordDiv = document.createElement('div')
const passwordInput = document.createElement('input')
passwordInput.type = 'password'
passwordInput.placeholder = 'Password'
passwordDiv.setAttribute('id','passwordDiv')
const passwordInputLabel = document.createElement('label')
passwordInputLabel.for = 'passwordInput'
passwordInputLabel.textContent = 'PassWord:'
passwordDiv.append(passwordInputLabel,passwordInput)


const confirmPasswordDiv = document.createElement('div')
const ConfirmPasswordInput = document.createElement('input')
ConfirmPasswordInput.type = 'password'
ConfirmPasswordInput.placeholder = 'Confirm Password'
confirmPasswordDiv.setAttribute('id','confirmPasswordDiv')
const ConfirmPasswordInputLabel = document.createElement('label')
ConfirmPasswordInputLabel.for = 'ConfirmPasswordInput'
ConfirmPasswordInputLabel.textContent = 'Confirm PassWord:'
confirmPasswordDiv.append(ConfirmPasswordInputLabel,ConfirmPasswordInput)


const buttonOfSubmit = document.createElement('button')
buttonOfSubmit.type = 'submit'
buttonOfSubmit.innerHTML = 'submit'
buttonOfSubmit.setAttribute('id', 'buttonOfSubmit')

//A esta é maneira mais facil de adicionar o atributo required a cada input 
//Fiz isso usando a função map em uma array com os inputs 
const inputs = document.querySelectorAll('input')
const inputsArray = [emailInput,countrySelector,ZipInput,passwordInput,ConfirmPasswordInput]
inputsArray.map((element)=>{
    element.setAttribute('required','')
})
    const rexeg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    emailInput.addEventListener('input', ()=>{
        if(rexeg.test(emailInput.value) === false){
            emailInput.setCustomValidity('Please type a valid email')
            emailInput.classList.remove('valided')
        }
        else {
            emailInput.setCustomValidity('')
            emailInput.classList.add('valided')
        }
    })
   
    //Para validar o país e o código postal 
    
    const zipArray = [Brazil,USA]
  
    countrySelector.addEventListener('input', ()=>{
        let values = countrySelector.options[countrySelector.selectedIndex].value
        console.log(values)
    })

   
   
    ZipInput.addEventListener('input', ()=>{
        let values = countrySelector.options[countrySelector.selectedIndex].value
        if(BRCode.test(ZipInput.value) === false && values == 'BR'){
            ZipInput.setCustomValidity('Please Add a brasilian valid ZipCode, Like: 10422-090')
        }
        else if(USACode.test(ZipInput.value) === false && values == 'USA') {
            ZipInput.setCustomValidity('Please Add a USA ZipCode, like: 0902 or 1025')
            
        }

        else {
            ZipInput.setCustomValidity('')
            ZipInput.classList.add('valided')
        }
        
    })

    ConfirmPasswordInput.addEventListener('input', ()=>{
        if(ConfirmPasswordInput.value != passwordInput.value){
            ConfirmPasswordInput.setCustomValidity('Please type the same password of the above input')
        }
        else {
            ConfirmPasswordInput.setCustomValidity('')
            ConfirmPasswordInput.classList.add('valided')
            passwordInput.classList.add('valided')
        }
    })

formulary.append(emailDiv,countryDiv,ZipDiv,passwordDiv,confirmPasswordDiv,buttonOfSubmit)
MainDiv.append(formulary)

body.append(MainDiv)