import React from "react";

export default function List(props) {
  return (
    <>
    <div className="list-item">
      <div className="list-img">
        <img src={props.img} alt="" />
      </div>

      <div className="list-details">
        <p className="list-details--name">{props.name}</p>
        <p className="list-details--age">{props.age}</p>
      </div>
      
    </div>
    
    
    </>
  );
}
