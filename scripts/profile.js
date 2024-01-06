window.onload = function () {
    const token = localStorage.getItem('userToken');
    if (!token) {
        window.location.href = 'login.html'; // Redirect to login if no token
    }

    axios.get('https://comicverse-backend-2f98a9ef6ba2.herokuapp.com/auth/favorites', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(function (response) {
            displayFavorites(response.data);
        })
        .catch(function (error) {
            console.error('Error fetching favorites:', error);
        });
};

function displayFavorites(favorites) {
    const container = document.getElementById('favorites-container');

    container.innerHTML = ''; // Clear existing content

    favorites.forEach(comic => {
        const comicElement = document.createElement('div');
        comicElement.className = 'favorite-comic';
        comicElement.innerHTML = `
        <a href="/html/comic-details.html?id=${comic._id}">
            <img src="${comic.thumbnailUrl}" alt="${comic.title}">
            <h3>${comic.title}</h3>
            <p>${comic.description || 'No description available'}</p>
            <button onclick="deleteFavorite('${comic._id}')">Delete</button>
            <!-- Add more details as per your requirement -->
            </a>
        `;
        container.appendChild(comicElement);
    });
}
function deleteFavorite(comicId) {
    const token = localStorage.getItem('userToken');
    console.log(comicId)
    if (!token) {
        alert('You must be logged in to modify favorites');
        return;
    }

    axios.delete(`https://comicverse-backend-2f98a9ef6ba2.herokuapp.com/auth/favorites/${comicId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
    })
        .then(function (response) {
            console.log('Removed from favorites:', response.data);
            // Optionally, refresh the favorites list
            window.location.reload();
        })
        .catch(function (error) {
            console.error('Error removing favorite:', error);
        });
}


document.getElementById('logout-button').addEventListener('click', function () {
    localStorage.removeItem('userToken'); // Remove the token
    window.location.href = '../index.html'; // Redirect to home page
});
