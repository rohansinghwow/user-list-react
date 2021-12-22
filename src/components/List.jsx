import React from "react";

export default function List(props) {
  return (
    <div className="list-item">
      <div className="list-img">
        <img src={props.img} alt="" />
      </div>

      <div className="list-details">
        <h2>{props.name}</h2>
        <p>{props.age}</p>
      </div>
    </div>
  );
}
