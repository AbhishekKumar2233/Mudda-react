import React from "react";
import "../styles.css";

export default function Post(props) {
  return (
    <div className="main_div">
      <div className="main_detail">
        <a href="/">
          <img id="user_img" alt="" src={props.user_img} />
          <span>
            <h4>{props.username}</h4>
            <ul id="post_user_detail">
              <li>
                {props.location}
                <img
                  src="https://img.icons8.com/material-outlined/24/000000/filled-circle--v1.png"
                  alt=""
                />
              </li>
              <li>
                {props.type}
                <img
                  src="https://img.icons8.com/material-outlined/24/000000/filled-circle--v1.png"
                  alt=""
                />
              </li>
              <li>{props.department}</li>
            </ul>
          </span>
        </a>

        <span></span>
        <div className="detail_right">
          <p>{props.time}</p>
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 172 172"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#000000">
                  <path d="M27.52,68.8c-11.395,0 -20.64,9.245 -20.64,20.64c0,11.395 9.245,20.64 20.64,20.64c11.395,0 20.64,-9.245 20.64,-20.64c0,-11.395 -9.245,-20.64 -20.64,-20.64zM86,68.8c-11.395,0 -20.64,9.245 -20.64,20.64c0,11.395 9.245,20.64 20.64,20.64c11.395,0 20.64,-9.245 20.64,-20.64c0,-11.395 -9.245,-20.64 -20.64,-20.64zM144.48,68.8c-11.395,0 -20.64,9.245 -20.64,20.64c0,11.395 9.245,20.64 20.64,20.64c11.395,0 20.64,-9.245 20.64,-20.64c0,-11.395 -9.245,-20.64 -20.64,-20.64z"></path>
                </g>
              </g>
            </svg>
          </a>
        </div>
        <br />
        <hr />
        <div className="main_content">
          <p>{props.post}</p>
          <a href="/">Read More</a>
          <img id="post_img" src={props.post_img} alt="" />
        </div>
        <hr />
        <div className="post_btn">
          <button id="post_btn">
            <img
              alt=""
              src="https://img.icons8.com/ios/24/000000/facebook-like--v1.png"
            />
            <p>{props.like}</p>
          </button>
          <button id="post_btn">
            <img
              alt=""
              src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/000000/external-dislike-feedback-kmg-design-detailed-outline-kmg-design.png"
            />
            {props.dislike}
          </button>
          <button id="post_btn">
            <img
              alt=""
              src="https://img.icons8.com/external-neu-royyan-wijaya/32/000000/external-chat-neu-interface-neu-royyan-wijaya.png"
            />
            {props.camment}
          </button>
          <button id="share">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 172 172"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#3498db">
                  <path d="M143.33333,0c-15.84505,0 -28.66667,12.82162 -28.66667,28.66667c0,1.98763 0.27995,3.94726 0.67188,5.82292l-65.17187,32.69792c-5.26302,-6.01888 -12.8776,-9.85417 -21.5,-9.85417c-15.84505,0 -28.66667,12.82162 -28.66667,28.66667c0,15.84506 12.82162,28.66667 28.66667,28.66667c8.6224,0 16.23698,-3.83528 21.5,-9.85417l65.17188,32.69792c-0.39192,1.87565 -0.67187,3.83528 -0.67187,5.82292c0,15.84506 12.82162,28.66667 28.66667,28.66667c15.84506,0 28.66667,-12.82161 28.66667,-28.66667c0,-15.84505 -12.82161,-28.66667 -28.66667,-28.66667c-8.6224,0 -16.23698,3.83528 -21.5,9.85417l-65.17187,-32.69792c0.39193,-1.87565 0.67188,-3.83528 0.67188,-5.82292c0,-1.98763 -0.27994,-3.94726 -0.67187,-5.82292l65.17188,-32.69792c5.26302,6.01888 12.8776,9.85417 21.5,9.85417c15.84506,0 28.66667,-12.82161 28.66667,-28.66667c0,-15.84505 -12.82161,-28.66667 -28.66667,-28.66667z"></path>
                </g>
              </g>
            </svg>
            Share
          </button>
        </div>
      </div>
    </div>
    //
  );
}
