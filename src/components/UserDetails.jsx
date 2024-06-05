import React from "react";
import LeftNavbar from "./LeftNavbar";
import "../styles/HomePage.css";

const UserDetails = ()=>{

    return(
        <>
        <LeftNavbar />
        
        <div class="main-content">
      <div class="container">

         {/* <!-- user details page --> */}
         <div class="user-details-page" id="user-details-page">
            <div class="main-card fw-bolder">

                <table style={{"border" : "none"}}>
                    <tr>
                        <td><h5>Seller Name</h5></td>
                        <td><h5  style={{"margin-left": "-90px;"}}>:</h5></td>
                        <td><h5 style={{"margin-left": "-250px;"}} id="seller-name">________</h5></td>
                    </tr>
                    <tr>
                        <td><h5>Business Name</h5></td>
                        <td><h5 style={{"margin-left": "-90px;"}}>:</h5></td>
                        <td><h5 style={{"margin-left": "-250px;"}} id="business-name">________</h5></td>
                    </tr>
                    <tr>
                        <td><h5>Business Address</h5></td>
                        <td><h5 style={{"margin-left": "-90px;"}}>:</h5></td>
                        <td><h5 style={{"margin-left": "-250px;"}} id="business-address">________</h5></td>
                    </tr>
                    <tr>
                        <td><h5>Business GST</h5></td>
                        <td><h5 style={{"margin-left": "-90px;"}}>:</h5></td>
                        <td><h5 style={{"margin-left": "-250px;"}} id="business-gst">________</h5></td>
                    </tr>
                    <tr>
                        <td><h5>Mobile Number</h5></td>
                        <td><h5 style={{"margin-left": "-90px;"}}>:</h5></td>
                        <td><h5 style={{"margin-left": "-250px;"}} id="business-number">__________</h5></td>
                    </tr>
                    <tr>
                        <td><h5>Email</h5></td>
                        <td><h5 style={{"margin-left": "-90px;"}}>:</h5></td>
                        <td><h5 style={{"margin-left": "-250px;"}} id="email">________</h5></td>
                    </tr>
                </table>
            </div>

          </div>

         
       </div>
       </div>
        </>

    )
}

export default UserDetails;