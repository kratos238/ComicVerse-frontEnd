document.addEventListener('DOMContentLoaded', function() {
    const token = localStorage.getItem('userToken');
    if (!token) {
        window.location.href = 'login.html'; // Redirect to login if no token
    }

    axios.get('http://localhost:3000/favorites', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(function(response) {
        displayFavorites(response.data);
    })
    .catch(function(error) {
        console.error('Error fetching favorites:', error);
    });
});

function displayFavorites(favorites) {
    const container = document.getElementById('favorites-container');
    // Populate container with favorite comics
}

document.getElementById('logout-button').addEventListener('click', function() {
    localStorage.removeItem('userToken'); // Remove the token
    window.location.href = 'index.html'; // Redirect to home page
});
