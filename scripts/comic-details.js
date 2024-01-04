document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const comicId = params.get('id');
    fetchComicDetails(comicId);
});

function fetchComicDetails(comicId) {
    fetch(`http://localhost:3000/comics/${comicId}`)
        .then(response => response.json())
        .then(comic => {
            // Display the details of the comic
        })
        .catch(error => console.error('Error:', error));
}


