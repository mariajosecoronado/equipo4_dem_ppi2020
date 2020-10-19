import React from "react";
import "../style/style.css";



class menu_admin extends React.Component {


  render() {
    return (
      <div>
        <nav class="navbar navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <h1 id="titulo_3">cook logo </h1>
         
          <a className="navbar-brand" href="/buscar_admin">
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              class="bi bi-nut"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
               <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
            </svg>
          </a>
        
          </nav>
      </div>
        );
  }
}
export default menu_admin;