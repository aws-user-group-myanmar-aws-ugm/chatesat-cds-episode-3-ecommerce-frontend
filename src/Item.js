import React from "react";

const Item = props => (
  <div>
    <img src={props.image} />
    <div>{props.name}</div>
  </div>
);

export default Item;
