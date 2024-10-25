document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const dashboard = document.getElementById('dashboard');
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const addFoodBtn = document.getElementById('add-food-btn');
    const foodList = document.getElementById('food-list');

    const users = JSON.parse(localStorage.getItem('users')) || [];

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

        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            showDashboard();
        } else {
            alert('Invalid username or password.');
        }
    });

    logoutBtn.addEventListener('click', showLoginForm);

    addFoodBtn.addEventListener('click', () => {
        const foodName = document.getElementById('food-name').value;
        const foodImage = document.getElementById('food-image').files[0];

        if (foodName && foodImage) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const foodItem = document.createElement('div');
                foodItem.className = 'food-item';
                foodItem.innerHTML = `
                    <img src="${e.target.result}" alt="${foodName}">
                    <span>${foodName}</span>
                `;
                foodList.appendChild(foodItem);
            };
            reader.readAsDataURL(foodImage);
        } else {
            alert('Please fill out all fields.');
        }
    });
});