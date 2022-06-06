import renderToDOM from '../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="view"></div>
    <div id="card-container"></div>
  </div>`;
  renderToDOM('#app', domString);
};
export default domBuilder;
