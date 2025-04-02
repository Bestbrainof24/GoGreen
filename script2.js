let name = sessionStorage.getItem('name');

if (name) {
  document.getElementById('greeting').textContent = `Welcome, ${name}!`;
} else {
  document.getElementById('greeting').textContent = 'Welcome, Guest!';
}

setTimeout(() => {
    document.getElementById('greeting').textContent = 'Welcome to our website!';
}, 3000);