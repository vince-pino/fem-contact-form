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
    const img1 = document.querySelector('#img1');
    const img2 = document.querySelector('#img2');

    if (!img1.classList.contains("hidden") && img2.classList.contains("hidden")) {
      img1.classList.add("hidden");
      img2.classList.remove("hidden");
      radioVal = 1;
    } 
    else if (!img2.classList.contains('hidden') && img1.classList.contains('hidden')) {
      img2.classList.add('hidden');
      img1.classList.remove('hidden');
      radioVal = 2;
    }
    else {
      img.classList.remove("hidden");
    }

  });
});

const label = document.querySelector('.checkbox-section label');
const checkbox = label.querySelector('input[type="checkbox"]');
const img = label.querySelector('img');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    img.style.display = 'block';
  } else {
    img.style.display = 'none';
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

  if (firstName === '' ) {
    document.querySelector('.first-name input').classList.add('error-input');
    document.querySelector('.first-name p').style.display = 'block';
  }
  else {
    document.querySelector('.first-name input').classList.remove('error-input');
    document.querySelector('.first-name p').style.display = 'none';
  }
  if (lastName === '') {  
    document.querySelector('.last-name input').classList.add('error-input');
    document.querySelector('.last-name p').style.display = 'block';
  }
  else {
    document.querySelector('.last-name input').classList.remove('error-input');
    document.querySelector('.last-name p').style.display = 'none';
  }
  if (email === '') {
    document.querySelector('.email-section input').classList.add('error-input');
    emailError[1].style.display = 'block';
    emailError[0].style.display = 'none';
  }
  else if (!isEmailValid) {
    document.querySelector('.email-section input').classList.add('error-input');
    emailError[0].style.display = 'block';
    emailError[1].style.display = 'none';
  }
  else {
    document.querySelector('.email-section input').classList.remove('error-input');
    emailError[0].style.display = 'none';
    emailError[1].style.display = 'none';
  }
  // fix this
  if (img1.classList.contains('hidden') && img2.classList.contains('hidden')) {
    document.querySelector('.option-section p').style.display = 'block';
  }
  else {
    document.querySelector('.option-section p').style.display = 'none';
  }
});