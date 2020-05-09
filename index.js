const input = document.querySelector('#input');
const output = document.querySelector('#output');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  const a = input.value;
  output.value = a.split('').reverse().join(' ');
})