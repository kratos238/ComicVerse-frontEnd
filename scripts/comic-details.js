window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const comicId = params.get('id');
    console.log('Comic ID:', comicId);
    if (comicId) {
        fetchComicDetails(comicId);
    } else {
        console.error('Comic ID not found in the URL');
    }
};

function fetchComicDetails(comicId) {
    fetch(`https://comicverse-backend-2f98a9ef6ba2.herokuapp.com/comics/${comicId}`)
        .then(response => response.json())
        .then(comic => {
            console.log('Comic data:', comic);
            document.getElementById('comic-title').textContent = comic.title;
            document.getElementById('comic-image').src = comic.thumbnailUrl;
            document.getElementById('comic-description').textContent = comic.description;
            // Populate other details similarly
        })
        .catch(error => console.error('Error:', error));
}


const addToFavoritesBtn = document.getElementById('add-to-favorites-btn');
addToFavoritesBtn.addEventListener('click', function () {
    const userToken = localStorage.getItem('userToken');
    const params = new URLSearchParams(window.location.search);
    const comicId = params.get('id');
    console.log(userToken)
    if (!userToken) {
        alert('You must be logged in to add favorites');
        return;
    }
    addComicToFavorites(comicId, userToken);
});


function addComicToFavorites(comicId, token) {
    axios.put('https://comicverse-backend-2f98a9ef6ba2.herokuapp.com/auth/favorites', { comicId: comicId }, {
        headers: { 'Authorization': `Bearer ${token}` }
    })
        .then(response => {
            console.log('Added to favorites:', response.data);
            alert('Comic added to favorites!');
        })
        .catch(error => {
            console.error('Error adding to favorites:', error);
            alert('Failed to add to favorites.');
        });
}

