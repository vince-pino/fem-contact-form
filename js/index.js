const firstNameInput = document.querySelector('.first-name input');
const lastNameInput = document.querySelector('.last-name input');
const emailInput = document.querySelector('.email-section input');

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return regex.test(email);
}

const options = document.querySelectorAll('.radio-button-container');

options.forEach((option) => {
  option.addEventListener('click', () => {
    const radioInput = option.querySelector('input');
    const isChecked = radioInput.checked;

    if (!isChecked) {
      options.forEach((option) => {
        const input = option.querySelector('input');
        const img = option.querySelector('img');
        
        if (input === radioInput) {
          input.checked = true;
          img.style.display = 'block';
        }
        else {
          img.style.display = 'none';
          input.checked = false;
        }

      })
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

  if (firstName === '' ) {
    document.querySelector('.first-name input').classList.add('error-input');
  } 
  if (lastName === '') {  
    document.querySelector('.last-name input').classList.add('error-input');
  }
  if (!isEmailValid) {
    document.querySelector('.email-section input').classList.add('error-input');
  }
  
});