const options = document.querySelectorAll('.radio-button-container');

options.forEach((option) => {
  option.addEventListener('click', () => {
    option.querySelector('input').checked = true;
  });
});

const label = document.querySelector('.checkbox-section label');
const checkbox = label.querySelector('input[type="checkbox"]');
const img = label.querySelector('img');

console.log(label)

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    img.style.display = 'block';
  } else {
    img.style.display = 'none';
  }
});