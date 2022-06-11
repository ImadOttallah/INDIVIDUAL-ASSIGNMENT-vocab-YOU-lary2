import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const addCard = (uid, obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
      <div class="form-group">
        <label for="image">Title</label>
        <input type="text" class="form-control" id="title" placeholder="title" value="${obj.title || ''}" required>
      </div>

        <div class="form-group">
        <label for="image">Language</label>
        <select id="language_tech">
          <option value="">Select a Language</option>
          <option value="java">Java</option>
          <option value="go">Go</option>
          <option value="php">PHP</option>
          <option value="c_sharp">C#</option>
          <option value="python">Python</option>
        </select>
        </div>

        <div class="form-group">
        <label for="description">Definition</label>
        <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px" placeholder="definition">${obj.definition || ''}</textarea>
      

      <div class="form-check">
      <input type="checkbox" class="form-check-input" id="favorite" ${obj.favorite ? 'checked' : ''}>
      <label class="form-check-label" for="favorite">Favorite Language?</label>
    </div>
    </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Card</button>
    </form>`;
  renderToDOM('#form-container', domString);
};
export default addCard;
