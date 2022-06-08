import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const addCard = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
      <div class="form-group">
        <label for="image">Title</label>
        <input type="text" class="form-control" id="title" placeholder="title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">Language/Tech</label>
       
        <div class="form-group">
        <select id="language_tech">
          <option value="">Select a Language</option>
          <option value="javascript">Javascript</option>
          <option value="css">CSS</option>
          <option value="html">HTML</option>
        </select>
      </div>
      <div class="form-group">
        <label for="title">Description</label>
        <input type="text" class="form-control" id="definition" aria-describedby="definition" placeholder="Definition" value="${obj.definition || ''}" required>
      </div>
      <div class="form-check">
      <input type="checkbox" class="form-check-input" id="favorite" ${obj.favorite ? 'checked' : ''}>
      <label class="form-check-label" for="favorite">Favorite Language ?</label>
    </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Card</button>
    </form>`;
  renderToDOM('#form-container', domString);
};
export default addCard;
