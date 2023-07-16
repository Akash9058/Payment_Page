import React from 'react'
import "./TextField.css"
export default function TextField() {
  return (
    <div className="textField">
      <div className="left">
        <input type="checkbox" />
        <label>12 Months Subscription</label>
      </div>
      <div className="right">
        <div className="top">
          <span>Total</span>
          <div className="price">₹179</div>
        </div>
        <div className="bottom">
          <div className="rate">₹15</div>
          <span>/mo</span>
        </div>
      </div>
    </div>
  );
}
