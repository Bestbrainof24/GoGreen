let name = sessionStorage.getItem('name');

if (name) {
  document.getElementById('greeting').textContent = `Hello, ${name}!`;
} else {
  document.getElementById('greeting').textContent = 'Hello, Guest!';
}

setTimeout(() => {
    document.getElementById('greeting').textContent = 'Welcome to our website!';
}, 3000);
