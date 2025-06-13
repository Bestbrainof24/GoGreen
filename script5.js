const previous = document.getElementsByClassName('previous');
const next = document.getElementsByClassName('next');

document.getElementById('previous').addEventListener('click', () => {
  window.location.href = 'index2.html';
})

document.getElementById('next').addEventListener('click', () => {
  window.location.href = 'index3.html';
})