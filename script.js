// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBt6CaKy5d_fUX5YCsQlEtP4vzT-LPtQl0",
    authDomain: "gogreen-ee529.firebaseapp.com",
    projectId: "gogreen-ee529",
    storageBucket: "gogreen-ee529.appspot.com",
    messagingSenderId: "427559388203",
    appId: "1:427559388203:web:80af44ead9caff02ff566e",
    measurementId: "G-WH0FN2BSG0"
};

// Initialize Firebase with compatibility library
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// DOM elements
const input = document.querySelector('.input');
const submit = document.getElementById('submit');

// Enhanced save function with reCAPTCHA and error handling
async function saveNameToFirestore() {
    const name = input.value.trim();
    if (!name) {
        alert('Please enter your name');
        return;
    }

    try {
        // Get reCAPTCHA token
        const token = await grecaptcha.execute('6Ld5OCYrAAAAAH4BjlbdjtOaxrrh2u_vsJpxZHnl', { action: 'submit' });

        // Check Firebase connection
        await db.collection("test").doc("connection-test").get();
        
        // Save user data along with reCAPTCHA token
        await db.collection("users").add({
            name: name,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            recaptchaToken: token  // Store the reCAPTCHA token (optional, for validation purposes)
        });
        
        // Store name in sessionStorage and redirect
        sessionStorage.setItem('name', name);
        window.location.href = "index2.html";
    } catch (error) {
        console.error("Error:", error);
        alert(`Error: ${error.message}`);
    }
}

// Event listeners with debouncing to prevent multiple submissions
let isSubmitting = false;
submit.addEventListener('click', () => {
    if (!isSubmitting) {
        isSubmitting = true;
        saveNameToFirestore().finally(() => isSubmitting = false);
    }
});

window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !isSubmitting) {
        isSubmitting = true;
        saveNameToFirestore().finally(() => isSubmitting = false);
    }
});



// const input = document.querySelector('.input');
// const submit = document.getElementById('submit');
// const button = document.querySelector('.hidden');
// function getname() {

//     if (input.value.trim() !== '') {
//         // Store the name in local storage
//         localStorage.setItem('name', input.value.trim());
//         window.location.href = "index2.html";
//     } else {
//         alert('Name is required');
//     }
// }

// // Example usage: Attach this function to an input event or button click
// submit.addEventListener('click', getname);
// window.addEventListener('keypress', function (event) {
//     if (event.key === 'Enter') {
//         getname();
//     }
// });