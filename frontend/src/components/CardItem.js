import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

export default function CardItem(props) {
  //console.log(props)
  const { id, likes, dislikes } = props.resource;

  return (
    <div className="cardItem-main">
      <div className="close-div">
        <IoIosCloseCircleOutline
          className="closeBtn"
          onClick={() => props.handleClickDelete(id)}
          size={30}
        />
      </div>

      <h1 className="card-title">{props.resource.name}</h1>

      <div className="card-btn-div">
        <FaThumbsUp
          className="thumbsUp"
          onClick={() => props.handleLikes(id, likes)}
        />
        <form action={props.resource.link}>
          <input className="card-btn" type="submit" value="Link To Resource" />
        </form>
        <FaThumbsDown
          className="thumbsDown"
          onClick={() => props.handleDislikes(id, dislikes)}
        />
      </div>
      <div className="likes-container">
        <div className="likes">{likes}</div>
        <h6 className="likes-intro"> Please Rate This Resource</h6>
        <div className="dislikes">{dislikes}</div>
      </div>
    </div>
  );
}
