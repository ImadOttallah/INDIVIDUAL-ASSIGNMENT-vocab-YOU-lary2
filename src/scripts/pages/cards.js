import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';

const emptyCards = () => {
  document.querySelector('#card-container').innerHTML = '<h1>No Cards</h1>';
};

const showCards = (array) => {
  clearDom();
  if (array.length) {
    let domString = '';
    array.forEach((item) => {
      domString += `
     <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${item.language_tech}</h6>
    <p class="card-text">${item.definition}</p>
    <div><a href="#" class="card-link">Edit</a>
    <a href="#" class="card-link">Delete</a></div>
  </div>
</div>`;
    });
    renderToDOM('#card-container', domString);
  } else {
    emptyCards();
  }
};

export { emptyCards, showCards };
