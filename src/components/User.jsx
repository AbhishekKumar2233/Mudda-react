import React from "react";

export default function User(props) {
  return (
    <div className="follow_user">
      <img id="profile" alt={props.name} src={props.img} loading="lazy" />
      <div>
        <p>{props.name}</p>
        <p>{props.detail}</p>
      </div>
      <button>Follow</button>
    </div>
  );
}
