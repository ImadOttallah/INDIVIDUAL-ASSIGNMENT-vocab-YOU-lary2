import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';

const viewCard = (obj) => {
  clearDom();
  const domString = `
<div class="card">
<div class="card-body move-card" style="height: 180px;>
<h2 class="card-title">${obj.title}</h2>
<h6 class="card-subtitle mb-2 text-muted">${obj.language_tech}</h6>
<p class="card-text">${obj.definition}</p>
</div>
<div class="card-footer mx-auto text-muted">
<button id="edit-card--${obj.firebaseKey}">Edit</button>
<button id="delete-card--${obj.firebaseKey}">Delete</button>
<button id="view-time--${obj.firebaseKey}">Time Submited</button></div>
</div>
</div>`;

  renderToDOM('#view', domString);
};

export default viewCard;
