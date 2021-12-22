import React from "react";
import List from "./List";
import data from "../data";

export default function Card() {
  const mapper = data.map((item) => {
    return <List name={item.name} age={item.age} img={item.image} />;
  });
  return <div className="card">{mapper}</div>;
}
