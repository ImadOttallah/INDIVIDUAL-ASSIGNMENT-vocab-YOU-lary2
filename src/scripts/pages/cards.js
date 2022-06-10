import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';

const emptyCards = () => {
  document.querySelector('#card-container').innerHTML = '<h1>No Cards</h1>';
};

const showCards = (array) => {
  clearDom();
  const btnString = '<div class="filter-buttons"><button id="filter--java">Java</button> <button id="filter--go">Go</button><button id="filter--php">PHP</button><button  id="filter--python">Python</button><button  id="filter--c_sharp">C#</button></div>';
  renderToDOM('#add-button', btnString);

  if (array.length) {
    let domString = '';
    array.forEach((item) => {
      domString += `
     <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${item.language_tech}</h6>
    <p class="card-text">${item.definition}</p>
  </div>
  <div class="card-footer mx-auto text-muted">
  <button id="edit-card--${item.firebaseKey}">Edit</button>
    <button id="delete-card--${item.firebaseKey}">Delete</button></div>
</div>`;
    });
    renderToDOM('#card-container', domString);
  } else {
    emptyCards();
  }
};

export { emptyCards, showCards };
