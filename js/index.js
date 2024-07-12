const firstNameInput = document.querySelector('.first-name input');
const lastNameInput = document.querySelector('.last-name input');
const emailInput = document.querySelector('.email-section input');

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return regex.test(email);
}

const options = document.querySelectorAll('.radio-button-container');
let radioVal = 0;

options.forEach((option) => {
  option.addEventListener('click', () => {
    const img = option.querySelector('img');
    const radio1 = document.querySelector('#radio-1');
    const radio2 = document.querySelector('#radio-2');
    const img1 = document.querySelector('#img1');
    const img2 = document.querySelector('#img2');

     if (img === img1) {
       img1.classList.remove("hidden");
       img2.classList.add("hidden");
       radio1.classList.add("bg-light-green");
       radio2.classList.remove("bg-light-green");
       radioVal = 1;
     } else if (img === img2) {
       img2.classList.remove("hidden");
       img1.classList.add("hidden");
       radio2.classList.add("bg-light-green");
       radio1.classList.remove("bg-light-green");
       radioVal = 2;
     }

  });
});

const label = document.querySelector('.checkbox-section label');
const checkbox = label.querySelector('input[type="checkbox"]');
const img_check = label.querySelector('img');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    img_check.style.display = 'block';
  } else {
    img_check.style.display = 'none';
  }
});

const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', () => {
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const isEmailValid = validateEmail(email);
  const emailError = document.querySelectorAll('.email-section p');
  const img1 = document.querySelector('#img1');
  const img2 = document.querySelector('#img2');
  const message = document.querySelector('.message-section textarea');
  const label = document.querySelector(".checkbox-section label");
  const img_check = label.querySelector("img");

  let hasError = false;

  if (firstName === '' ) {
    document.querySelector('.first-name input').classList.add('error-input');
    document.querySelector('.first-name p').style.display = 'block';
    hasError = true;
  }
  else {
    document.querySelector('.first-name input').classList.remove('error-input');
    document.querySelector('.first-name p').style.display = 'none';
  }
  if (lastName === '') {  
    document.querySelector('.last-name input').classList.add('error-input');
    document.querySelector('.last-name p').style.display = 'block';
    hasError = true;
  }
  else {
    document.querySelector('.last-name input').classList.remove('error-input');
    document.querySelector('.last-name p').style.display = 'none';
  }
  if (email === '') {
    document.querySelector('.email-section input').classList.add('error-input');
    emailError[1].style.display = 'block';
    emailError[0].style.display = 'none';
    hasError = true;
  }
  else if (!isEmailValid) {
    document.querySelector('.email-section input').classList.add('error-input');
    emailError[0].style.display = 'block';
    emailError[1].style.display = 'none';
    hasError = true;
  }
  else {
    document.querySelector('.email-section input').classList.remove('error-input');
    emailError[0].style.display = 'none';
    emailError[1].style.display = 'none';
  }

  if (img1.classList.contains('hidden') && img2.classList.contains('hidden')) {
    document.querySelector('.option-section p').style.display = 'block';
    hasError = true;
  }
  else {
    document.querySelector('.option-section p').style.display = 'none';
  }

  if (message.value === '') {
    document.querySelector('.message-section textarea').classList.add('error-input');
    document.querySelector('.message-section p').style.display = 'block';
    hasError = true;
  }
  else {
    document.querySelector('.message-section textarea').classList.remove('error-input');
    document.querySelector('.message-section p').style.display = 'none';
  }

  if(img_check.style.display === 'block') {
    document.querySelector('.checkbox-section p').style.display = 'none';
  }
  else {
    document.querySelector('.checkbox-section p').style.display = 'block';
    hasError = true;
  }

  if (!hasError) {
    document.querySelector('.success-message-container').style.display = 'block';
    
    setInterval(() => {
      document.querySelector('.success-message-container').style.display = 'none';
    },3000);
  }
  else {
    document.querySelector('.success-message-container').style.display = 'none';
  }

});