document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    axios.post('https://comicverse-backend-2f98a9ef6ba2.herokuapp.com/auth/signup', {
        email: email,
        password: password
    })
        .then(function (response) {
            console.log(response);
            window.location.href = 'login.html'
            
        })
        .catch(function (error) {
            console.error(error);
            
        });
});