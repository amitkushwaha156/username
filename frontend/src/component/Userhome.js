import React from "react";
import ReactModal from "./ReactModal";
//import Form from "react-bootstrap/Form";

function Userhome() {
  return (
    <div className="userhome px-4">
      <div className="d-flex ">
        <i class="bi bi-people-fill">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-people-fill "
            viewBox="0 0 16 16"
          >
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          </svg>
        </i>
        <h2 className="mt-2 ">User Details</h2>
      </div>

      <div className="d-flex ">
        <div class="input-group mt-3">
          <div class="form-outline">
            <input
              id="search-input"
              type="search"
              placeholder="Search"
              class="form-control"
            />
          </div>
        </div>
        <div>
          <i class="bi bi-person-fill-add">
            <ReactModal />
          </i>
        </div>
      </div>
    </div>
  );
}

export default Userhome;
