import React from "react";
import logo from "../Resources/easy-bill-logo.png";
import "../styles/LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <section class="vh-10 parent">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div
              class="card text-black"
              style={{
                "border-radius": "25px",
                "background-color": "rgb(40, 39, 39",
              }}
            >
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src={logo} class="img-fluid" alt="Sample" />
                  </div>

                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-danger">
                      Log in
                    </p>

                    <form class="mx-1 mx-md-4 text-white">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example1c">
                            Userame
                          </label>
                          <input
                            title="username"
                            type="text"
                            id="username"
                            class="form-control"
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example4c">
                            Password
                          </label>
                          <input
                            title="password"
                            type="password"
                            id="password"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <br />

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                       
                        <Link to="/homepage" className="btn btn-success fw-bolder">Log in</Link>
                        <Link to="/signup" className="btn btn-info fw-bolder mx-2">
                          Sign up
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
