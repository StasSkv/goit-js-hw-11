// const properties = {
//   webformatURL,
//   largeImageURL,
//   tags,
//   likes,
//   views,
//   comments,
//   downloads,
// };

export function renderImages(images) {
  const newList = images
    .map(image => {
      return `<li class="gallery-item">
        <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-img" data-source="${image.largeImageURL}" width="360" height="152"/>
        <ul class="info-list">
          <li class="info-item">
            <h4 class="info-title">Likes</h4>
            <p class="info-text">${image.likes}</p>
          </li>
          <li class="info-item">
            <h4 class="info-title">Views</h4>
            <p class="info-text">${image.views}</p>
          </li>
          <li class="info-item">
            <h4 class="info-title">Comments</h4>
            <p class="info-text">${image.comments}</p>
          </li>
          <li class="info-item">
            <h4 class="info-title">Downloads</h4>
            <p class="info-text">${image.downloads}</p>
          </li>
        </ul>
      </li>`;
    })
    .join('');
  const list = document.querySelector('.gallery-list');
  list.insertAdjacentHTML('beforeend', newList);
}
