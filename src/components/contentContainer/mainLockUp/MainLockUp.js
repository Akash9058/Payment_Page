import React from "react";
import "./mainLockUp.css";
import icon1 from'./Icon.png'
import  icon2  from "./Icon (1).png";
import  icon3  from "./Icon (2).png";
import  icon4 from "./Icon (3).png";
import icon5  from "./Icon (4).png";
export default function MainLockUp() {
  return (
    <div className="main">
      <div className="feature">
        <h1 className="header">
          Access curated courses worth <br /> <div className="redLine"></div>₹
          18,500 at just
          <span className="highlighted"> ₹ 99</span> per year!
        </h1>
        <ul className="points">
          <li>
            <img src={icon1} />
            <span className="text">
              <span className="highlighted">100+</span> Job relevant courses
            </span>
          </li>
          <li>
            <img src={icon2} />
            <span className="text">
              <span className="highlighted">20,000+</span> Hours of content
            </span>
          </li>
          <li>
            <img src={icon3} />
            <span className="text">
              <span className="highlighted">Exclusive</span> webinar access
            </span>
          </li>
          <li>
            <img src={icon4} />
            <span className="text">
              Scholarship worth<span className="highlighted"> ₹94,500</span>
            </span>
          </li>
          <li>
            <img src={icon5} />
            <span className="text">
              <span className="highlighted">Ad Free</span> learning experience
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
