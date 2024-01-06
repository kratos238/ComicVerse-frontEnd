window.onload = function () {
    loadComics();
};

function loadComics() {
    fetch('https://git.heroku.com/comicverse-backend.git/comics/')
        .then(response => response.json())
        .then(comics => {
            const comicsContainer = document.getElementById('comics-container');
            comics.forEach(comic => {
                const comicElement = document.createElement('div');
                comicElement.className = 'comic';
        //         comicElement.innerHTML = `
        //   <img src="${comic.thumbnailUrl}" alt="${comic.title}">
        //   <h3>${comic.title}</h3>
        //   <!-- More comic details here -->
        // `;
        comicElement.innerHTML = `
            <a href="/html/comic-details.html?id=${comic._id}">
                <img src="${comic.thumbnailUrl}" alt="${comic.title}">
                <h3>${comic.title}</h3>
            </a>
        `;
                comicsContainer.appendChild(comicElement);
            });
        })
        .catch(error => console.error('Error:', error));
}
