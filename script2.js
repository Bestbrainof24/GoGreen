let name = sessionStorage.getItem('name');

if (name) {
  document.getElementById('greeting').textContent = `Hello, ${name}!`;
} else {
  document.getElementById('greeting').textContent = 'Hello, Guest!';
}

setTimeout(() => {
    document.getElementById('greeting').textContent = 'Welcome to our website!';
}, 3000);

const previous = document.getElementsByClassName('previous');
const next = document.getElementsByClassName('next');

document.getElementById('previous').addEventListener('click', () => {
  window.location.href = 'index.html';
})

document.getElementById('next').addEventListener('click', () => {
  window.location.href = 'index5.html';
})