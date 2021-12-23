import React from "react";
import List from "./List";
import data from "../data";

export default function Card() {
const [state, setState] = React.useState(data)

function clearAll(){
  setState([])
}

  const mapper = state.map((item) => {
    return <List key={item.id}name={item.name} age={item.age} img={item.image} />;
  });
  return (
  <>
  <div className="card">{mapper}</div>
  <button onClick={clearAll} className="list-btn">Clear All</button>
  </>
  );
}
