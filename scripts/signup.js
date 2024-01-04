document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    axios.post('http://localhost:3000/auth/signup', {
        email: email,
        password: password
    })
        .then(function (response) {
            console.log(response);
            
        })
        .catch(function (error) {
            console.error(error);
            
        });
});