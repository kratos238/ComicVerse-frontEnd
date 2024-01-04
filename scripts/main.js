// scripts/main.js

window.onload = function () {
    loadComics();
};

function loadComics() {
    fetch('http://localhost:3000/comics/')
        .then(response => response.json())
        .then(comics => {
            const comicsContainer = document.getElementById('comics-container');
            comics.forEach(comic => {
                const comicElement = document.createElement('div');
                comicElement.className = 'comic';
                comicElement.innerHTML = `
          <img src="${comic.thumbnailUrl}" alt="${comic.title}">
          <h3>${comic.title}</h3>
          <!-- More comic details here -->
        `;
                comicsContainer.appendChild(comicElement);
            });
        })
        .catch(error => console.error('Error:', error));
}
