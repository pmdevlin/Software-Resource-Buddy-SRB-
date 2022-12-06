import React from "react";
import CardItem from "./CardItem";

export default function Card(props) {
  console.log(props);

  const item = props.info.map((item) => {
    return (
      <CardItem
        key={item.id}
        handleClickDelete={props.handleClickDelete}
        handleLikes={props.handleLikes}
        handleDislikes={props.handleDislikes}
        resource={item}
      />
    );
  });

  return <div className="main">{item}</div>;
}
