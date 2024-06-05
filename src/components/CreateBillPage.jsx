import React from "react";
import "../styles/CreateBillPage.css";
import LeftNavbar from "./LeftNavbar";

const CreateBillPage = ()=>{

    return (
        <>
        <LeftNavbar />
        
        <div class="main-content">
    <div class="container">

           {/* <!-- create bill page --> */}
        <div class="container-fluid create-bill-page-details" id="create-bill-page">

            <div class="my-card">
                <h6 class="text-primary fw-bolder" style={{"margin-left": "20px;"}}>Customer Details</h6>
                <div class="text-danger">

                    <table>
                        <tr>
                            <td><h6>Customer Name</h6></td>
                            <td><h5 style={{"margin-left": "-100px;"}}>:</h5></td>
                            <td><input
                                title="Customer Name"
                                type="text"
                                id="customer-name"
                                style={{"margin-left": "-250px;"}}
                              /></td>
                        </tr>
                        <tr>
                            <td><h6>Customer Number</h6></td>
                            <td><h5 style={{"margin-left": "-100px;"}}>:</h5></td>
                            <td> <input
                                title="Mobile Number"
                                type="number"
                                id="customer-mobile-number"
                                style={{"margin-left": "-250px;"}}
                              /></td>
                        </tr>
                        </table>
                        <hr/>
                  </div>
                </div>

                 {/* <!-- product details --> */}
          <div class="prouct-details">
            <h6 class="text-primary fw-bolder">Product Details</h6>
            <hr />

            <div class="container p-container">
              <table class="table my-table">
                <thead class="table-head">
                  <tr style={{"text-align": "right"}}>
                    <th colspan="8" id="product-add-btn">
                      <button class="btn btn-info add-btn">Add Items</button>
                    </th>
                  </tr>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>MRP</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Tax(%)</th>
                    <th>Discount(%)</th>
                    <th colspan="2">Total Price</th>
                  </tr>
                </thead>

                <tbody class="table-bdy" id="product-table">
                  {/* <!-- products will be displayed here --> */}
                </tbody>
                <tfoot></tfoot>
              </table>

              <div class="text-center">
                <button
                  type="button"
                  class="btn btn-success my-2"
                  id="generate-bill"
                >
                  Generate Bill
                </button>
              </div>
            </div>
          </div>


        </div>

              {/* <!-- Invoice Page --> */}
        <div class="invoice-page" id="invoice-page">
            <div class="d-flex justify-content-between invoice-logo fw-bolder">
              <img src="../easy-bill-logo.png" class="" width="50" alt="" />
              <h4 class="fw-bolder">
                Invoice No. <span class="fw-bolder" id="invoice-number"></span>
              </h4>
              <h4><button type="button" title="nothing" disabled></button></h4>
            </div>
            <hr />
  
            <div class="invoice-container">

                <div class="table-container">
                    <table class="left-table invoicetable">
                        <tr>
                            <td><h6>Seller Name</h6></td>
                            <td><h5 style={{"margin-left": "-30px;"}}>:</h5></td>
                            <td><h6 id="business-name-invoice" style={{"margin-left": "-120px;"}}>_________</h6></td>
                        </tr>
                        <tr>
                            <td><h6>Contact Number</h6></td>
                            <td><h5 style={{"margin-left": "-30px;"}}>:</h5></td>
                            <td><h6 id="seller-contact-number" style={{"margin-left": "-120px;"}}>_________</h6></td>
                        </tr>
                        <tr>
                            <td><h6>GSTin</h6></td>
                            <td><h5 style={{"margin-left": "-30px;"}}>:</h5></td>
                            <td><h6 id="invoice-gst" style={{"margin-left": "-120px;"}}>_________</h6></td>
                        </tr>
                    </table>
                
                    <table class="right-table invoicetable">
                        <tr>
                            <td><h6>Date</h6></td>
                            <td><h5 style={{"margin-left": "-30px;"}}>:</h5></td>
                            <td><h6 id="invoice-date" style={{"margin-left": "-120px;"}}>_________</h6></td>
                        </tr>
                        <tr>
                            <td><h6>Customer Name</h6></td>
                            <td><h5 style={{"margin-left": "-30px;"}}>:</h5></td>
                            <td><h6 id="customer-name-invoice" style={{"margin-left": "-120px;"}}>_________</h6></td>
                        </tr>
                        <tr>
                            <td><h6>Contact Number</h6></td>
                            <td><h5 style={{"margin-left": "-30px;"}}>:</h5></td>
                            <td><h6 id="customer-number-invoice" style={{"margin-left": "-120px;"}}>_________</h6></td>
                        </tr>
                    </table>
                </div>


            </div>
            <hr class="hr-1" />
  
            <div class="product-head">
              {/* <!-- <ul class="d-flex justify-content-between">
      <li>S.No</li>
      <li>Name</li>
      <li>MRP</li>
      <li>Quantity</li>
      <li>Tax(%)</li>
      <li>Discount(%)</li>
      <li>Price</li>
    </ul> --> */}
              <div class="container-fluid">
                <table class="table myTable">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>MRP</th>
                      <th>Quantity</th>
                      <th>Tax(%)</th>
                      <th>Discount(%)</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody id="invoice-data">
                    {/* <!-- products will be displayed here --> */}
                  </tbody>
                  <tfoot></tfoot>
                </table>
              </div>
            </div>
  
            {/* <!-- total calculation  --> */}
            <div class="total-calculation">
              <hr class="hr-1" />
              <table class="totalBill-section">
                <tr>
                    <td><strong>Total Price</strong></td>
                    <td><h5 style={{"margin-left": "-40px;"}}>:</h5></td>
                    <td><strong class="fw-bolder" id="total-price" style={{"margin-left": "-120px;"}}>₹</strong></td>
                </tr>

                <tr>
                    <td><strong>Total Discount</strong></td>
                    <td><h5 style={{"margin-left": "-40px;"}}>:</h5></td>
                    <td><strong class="fw-bolder" id="total-discount" style={{"margin-left": "-120px;"}}>₹</strong></td>
                </tr>

                <tr>
                    <td><strong>Bill Amount</strong></td>
                    <td><h5 style={{"margin-left": "-40px;"}}>:</h5></td>
                    <td><strong class="fw-bolder" id="bill-amount" style={{"margin-left": "-120px;"}}>₹</strong></td>
                </tr>
            </table>

            </div>
  
            <div>
              <p><strong class="p-3">Signature</strong></p>
            </div>
          </div>

        </div>

        <div class="download-box d-flex">
            <button type="button" class="btn btn-primary" id="download-btn">
              Download
            </button>
            <button type="button" class="btn btn btn-outline-danger" id="close-btn">
              Close
            </button>
          </div>

          <div id="centeredText">
            <span>Logging Off... </span>
            <div class="spinner-border text-light" role="status"></div>
          </div>
    </div>
        </>

    )

}

export default CreateBillPage;