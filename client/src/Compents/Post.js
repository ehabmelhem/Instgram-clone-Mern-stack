import React, { useState } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import FavoriteIcon from "@material-ui/icons/Favorite";
function Post({ avata, name }) {
  const [save, setSave] = useState(false);
  const [like, setLike] = useState(false);

  const [moving, setMoving] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [timer, setTimer] = useState(false);

  const confirm = (event) => {
    event.preventDefault();
    if (moving) {
      setMoving(false);
      return;
    }
    if (confirming === true) {
      clearTimeout(timer);
      //   what the handel dose is here
      setLike(true);
      setTimer(setTimeout(() => setConfirming(false), 200));
    } else {
      setConfirming(true);
      console.log("hii");

      setTimer(setTimeout(() => setConfirming(false), 200));
    }
  };
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src="https://instagram.fsdv2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/130758943_435616994481384_911417875127205677_n.jpg?_nc_ht=instagram.fsdv2-1.fna.fbcdn.net&_nc_ohc=oDVoCiM-l5EAX-zvNBL&tp=1&oh=37b6483b872631ad95257969af4c228e&oe=60505F73" />
        <h5 className="post__name">Liverpoolfc</h5>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </div>
      <div className="post_content">
        <img
          onClick={confirm}
          onTouchMove={() => setMoving(true)}
          onTouchEnd={confirm}
          src="https://instagram.fsdv2-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/149034753_431703654757825_1874527229930953841_n.jpg?_nc_ht=instagram.fsdv2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=ioDx9l8gGKQAX_PIKLk&tp=1&oh=217719129193fe3b50f496f1b6afac81&oe=604F7157"
          alt=""
        />
        <div className="post_content_icons">
          <div className="all_post_icons">
            <IconButton
              onClick={() => {
                setLike(!like);
              }}
            >
              {!like ? (
                <FavoriteBorderIcon />
              ) : (
                <FavoriteIcon className="hasLike" />
              )}
            </IconButton>
            <IconButton>
              <RadioButtonUncheckedIcon />
            </IconButton>
            <IconButton>
              <SendOutlinedIcon />
            </IconButton>
          </div>

          <div className="post_save">
            <IconButton
              onClick={(e) => {
                setSave(!save);
              }}
            >
              {!save ? <BookmarkBorderOutlinedIcon /> : <BookmarkIcon />}
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
