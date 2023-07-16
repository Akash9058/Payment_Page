import React from "react";
import "./form.css";
import clock from "./Icon Clock.png";
import Razorpay from "./Icon Container.png";
import InputContainer from "./InputContainer/InputContainer";
export default function Form() {
  return (
    <div className="form">
      <div className="form-container">
        <div className="progressBar">
          <div className="stages">
            <div className="icon">
              <span>1</span>
            </div>
            <span className="stage">Sign Up</span>
          </div>
          <div className="stages">
            <div className="icon">
              <span>2</span>
            </div>
            <span className="stage">Subscribe</span>
          </div>
        </div>
        <div className="formHeader">Select your subcription plan</div>
       <InputContainer />
        <div className="summaryContainer">
          <div className="subsFee">
            <span>Subcription Fee</span>
            <div className="price">₹18,500</div>
          </div>
          <div className="alert">
            <div className="alertHeader">
              <span>Limited time offer</span>
              <div className="price">- ₹18,401</div>
            </div>
            <div className="alertBody">
              <img src={clock} />
              <span>Offer valid till 25th March 2023 </span>
            </div>
          </div>
          <div className="textContainer">
            <div className="leftText">Total (Incl. of 18% GST)</div>
            <div className="rightText">₹149</div>
          </div>
        </div>
        <div className="btnContainer">
          <button className="secondaryBtn">CANCEL</button>
          <button className="primaryBtn">proceed to pay</button>
        </div>
        <div className="iconContainer">
            <img src={Razorpay}/>
        </div>
      </div>
    </div>
  );
}
