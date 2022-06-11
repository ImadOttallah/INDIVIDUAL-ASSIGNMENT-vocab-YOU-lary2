import renderToDOM from '../helpers/renderToDom';
import logoutButton from './buttons/logoutButton';
import logo from '../../images/logo.jpg';

const navBar = () => {
  const domString = `
<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" id="navbar">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src=${logo} alt="fist" id="home" width="50" height="60"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <button id="add-card-btn">Create Entry</button>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"></a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search-bar">
      </form>
    </div>
   
  </div>
</nav>
`;
  renderToDOM('#navigation', domString);
  logoutButton();
};
export default navBar;
