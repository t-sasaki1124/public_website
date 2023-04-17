const button = document.querySelector('button');
const output = document.querySelector('#output');

button.addEventListener('click', function() {
  const inputValue = document.querySelector('#input').value;
  output.textContent = 'こんにちは、' + inputValue + 'さん！';
});
