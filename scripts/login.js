document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    axios.post('http://localhost:3000/auth/login', {
        email: email,
        password: password
    })
        .then(function (response) {
            console.log(response);
            localStorage.setItem('userToken', response.data.token);
            window.location.href = 'profile.html';
        })
        .catch(function (error) {
            console.error(error);
            if (error.response && error.response.status === 401) {
                alert('Incorrect credentials. Please try again.');
            } else {
                // Handle other types of errors (e.g., server issues)
                alert('An error occurred. Please try again later.');
            }
        });

});