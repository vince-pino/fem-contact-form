const options = document.querySelectorAll('.radio-button-container');

options.forEach((option) => {
  option.addEventListener('click', () => {
    option.querySelector('input').checked = true;
  });
});
