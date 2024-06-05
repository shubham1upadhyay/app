import React, {useState } from "react";
import "../styles/LeftNavbar.css";
import { Link } from "react-router-dom";

const LeftNavbar = ()=>{

  const [isRedBackground1, setIsRedBackground1] = useState(false);
  const [isRedBackground2, setIsRedBackground2] = useState(false);
  const [isRedBackground3, setIsRedBackground3] = useState(false);
  const [isRedBackground4, setIsRedBackground4] = useState(false);

  const handleClick1 = (event) => {
    event.stopPropagation();
    setIsRedBackground1(true);
  };
  const handleClick2 = (event) => {
    event.stopPropagation();
    setIsRedBackground2(true);
  };
  const handleClick3 = (event) => {
    event.stopPropagation();
    setIsRedBackground3(true);
  };
  const handleClick4 = (event) => {
    event.stopPropagation();
    setIsRedBackground4(true);
  };

 


    return (
        <>
         <>
         <nav class="navbar navbar-expand-md navbar-dark bg-danger fixed-top">
        <div class="container-fluid title d-flex justify-content-betweens">
          <h1 class="text-light">Easy Bill</h1>
          {/* <!-- <button type="button" class="btn btn-primary" id="download-btn">Download</button> --> */}
        </div>
      </nav>

<div class="mYnavbar" id="navbar">
    <div class="toggle-btn" onclick="toggleNavbar()">
        |
    </div>
    <ul>
        <li> <button
            type="button"
            class="user-details-btn"
            id="user-details-btn"
            onClick={handleClick1}
            style={{
              backgroundColor: isRedBackground1 ? 'red' : ' rgb(34, 17, 17)',
            }}
          >
            <Link to='/user-details'>User Details</Link>
          </button></li>

        <li><button
            type="button"
            class="create-bill-btn"
            id="create-bill-btn"
            onClick={handleClick2}
            style={{
              backgroundColor: isRedBackground2 ? 'red' : ' rgb(34, 17, 17)',
            }}
           
          >
            <Link to='/create-bill'>Create Bill</Link>
          </button></li>

        <li><button
            type="button"
            class="create-bill-btn"
            id="product-details-btn"
            onClick={handleClick3}
            style={{
              backgroundColor: isRedBackground3 ? 'red' : ' rgb(34, 17, 17)',
            }}
          >
            <Link to='/inventory'>Product Management</Link>
          </button></li>

        <li> <button
            type="button"
            class="create-bill-btn"
            id="history-bill-btn"
            onClick={handleClick4}
            style={{
              backgroundColor: isRedBackground4 ? 'red' : ' rgb(34, 17, 17)',
            }}
          >
            <Link to='/recent-bill'>Recent Bills</Link>
          </button></li>

        {/* <!-- <li><a href="#">Contact</a></li> --> */}
    </ul>
    <ul class="logout-box">
      <li> <button type="button" class="create-bill-btn" id="logoutBtn" >
        <Link to='/login'>Logout</Link>
      </button></li>
    </ul>
</div>
        </>
        </>
    )
}

export default LeftNavbar;