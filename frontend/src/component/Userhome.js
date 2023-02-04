import React, { useState,useEffect } from "react";
import ReactModal from "./ReactModal";
import axios from "axios";

//import Form from "react-bootstrap/Form";

function Userhome() {


  const [id,setid]=useState(``)

  useEffect(() => {
    axios
      .get(`http://localhost:8080/todo/${id}`)
      .then((res) => {
         console.log(res.data)
      
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

console.log(id)
  return (
    <div className="userhome px-4">
      <div className="d-flex justify-content-around">
        <i className="bi bi-people-fill">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-people-fill "
            viewBox="0 0 16 16"
          >
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          </svg>
        </i>
        <h2 className="mt-2 ">User Details</h2>
      </div>

      <div className="d-flex ">
        <div className="input-group mt-3">
          <div className="form-outline">
            <input
              id="search-input"
              type="text"
              placeholder="Search"
              className="form-control" 
              value={id} onChange={e=>
                setid(e.target.value)
                                  }
            />
          </div>
        </div>
        <div>
          <i className="bi bi-person-fill-add">
            <ReactModal />
          </i>
        </div>
      </div>
    </div>
   
  );
}

export default Userhome;
