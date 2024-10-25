document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const dashboard = document.getElementById('dashboard');
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const logoutBtn = document.getElementById('logout-btn');

    let users = JSON.parse(localStorage.getItem('users')) || [];

    function showDashboard() {
        loginForm.style.display = 'none';
        registerForm.style.display = 'none';
        dashboard.style.display = 'block';
    }

    function showLoginForm() {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        dashboard.style.display = 'none';
    }

    function showRegisterForm() {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
        dashboard.style.display = 'none';
    }

    showRegisterLink.addEventListener('click', showRegisterForm);
    showLoginLink.addEventListener('click', showLoginForm);

    registerBtn.addEventListener('click', () => {
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;

        if (username && password) {
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful! Please login.');
            showLoginForm();
        } else {
            alert('Please fill out all fields.');
        }
    });

    loginBtn.addEventListener('click', () => {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        console.log('Users array:', users);  // Debugging: Check if users array is populated
        console.log('Login attempt:', { username, password });  // Debugging: Check login input

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            console.log('Login successful!');  // Debugging: Log success
            showDashboard();
        } else {
            alert('Invalid username or password.');
        }
    });

    logoutBtn.addEventListener('click', showLoginForm);
});
