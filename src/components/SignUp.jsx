import React from "react";
import logo from "../Resources/easy-bill-logo.png";
import "../styles/SignUp.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div style={{"backgroundColor": " rgb(48, 47, 47)"}}>
      <section class="vh-100">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div
                class="card text-black"
                style={{
                  "border-radius": "25px",
                  "background-color": "rgb(40, 39, 39)",
                }}
              >
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-danger">
                        Sign up
                      </p>
                      <p id="all-error" class="text-danger"></p>
                      <div class="mx-1 mx-md-4 text-white">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="seller-name">
                              Your Name<span class="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              id="seller-name"
                              class="form-control"
                            />
                            <small class="text-danger" id="name-error"></small>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="seller-email">
                              Your Email<span class="text-danger">*</span>
                            </label>
                            <input
                              type="email"
                              id="seller-email"
                              class="form-control"
                            />
                            <small class="text-danger" id="email-error"></small>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="pass">
                              Password<span class="text-danger"> *</span>
                            </label>
                            <input
                              type="password"
                              id="pass"
                              class="form-control"
                            />
                            <small class="text-danger" id="pass-error"></small>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="re-pass">
                              Confirm password<span class="text-danger">*</span>
                            </label>
                            <input
                              type="password"
                              id="re-pass"
                              class="form-control"
                            />
                            <small
                              class="text-danger"
                              id="re-pass-error"
                            ></small>
                          </div>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-5">
                          <input
                            title="input"
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="check-terms"
                            required
                          />
                          <label class="form-check-label" for="form2Example3">
                            I agree all statements in
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            class="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            id="proceed"
                          >
                            Proceed
                          </button>
                          <Link
                            to="/login"
                            class="btn btn-warning mx-2"
                          >
                            Log in
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src={logo} class="img-fluid" alt="Sample" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal --> */}
        <div
          class="modal fade bg-dark"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog bg-dark">
            <div class="modal-content bg-dark">
              <div class="modal-header bg-dark">
                <h5
                  class="modal-title text-danger fw-bolder"
                  id="staticBackdropLabel"
                >
                  Business Information
                </h5>
                <button
                  type="button"
                  class="btn-close text-danger bg-danger"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body bg-dark text-white fw-bolder">
                <form class="modalForm bg-dark" action="">
                  {/* <label class="form-label" for="seller-name">Seller Name</label>
                <input class="form-control" type="text" id="seller-name" name="seller-name" />  */}

                  <label class="form-label" for="business-name">
                    Business Name
                    <span id="b-name-error" class="text-danger"></span>
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    id="business-name"
                    name="business-name"
                  />

                  <label class="form-label" for="business-address">
                    Business Address
                    <span id="b-add-error" class="text-danger"></span>
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    id="business-address"
                    name="business-address"
                  />

                  <label class="form-label" for="gst">
                    GST<span id="b-gst-error" class="text-danger"></span>
                  </label>
                  <input class="form-control" type="text" id="gst" name="gst" />

                  <label class="form-label" for="business-contact-number">
                    Contact Number
                    <span id="b-num-error" class="text-danger"></span>
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    id="business-contact-number"
                    name="business-contact-number"
                  />
                </form>

                <div id="centeredText">
                  <span>Please wait </span>
                  <div class="spinner-border text-light" role="status"></div>
                </div>
              </div>
              <div class="m-2 p-2 text-center bg-dark">
                <button type="button" class="btn btn-success" id="register">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
