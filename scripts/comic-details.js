window.onload = function() {
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
    fetch(`http://localhost:3000/comics/${comicId}`)
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


