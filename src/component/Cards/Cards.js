import React from "react";
import "../Cards/Cards.css";
import { addToWatchLater } from "../../store/watchLaterSlice";
import { MdOutlineWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Cards = ({ video }) => {
  const { _id, title, creator, profile } = video;
  const dispatch = useDispatch();
  const {
    user: { token },
  } = useSelector((store) => store.auth);
  return (
    <div>
      <div className="card-vertical">
        <Link to={`/video/${_id}`}>
          <img
            className="card-image"
            src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`}
            alt={_id}
          />
        </Link>

        <div className="card-info">
          <div className="card-heading">
            <div></div>
            <h3 className="card-title-header">{title}</h3>
          </div>
          <div className="video-desc">
            <img
              className="disc creator-avator avator-xs-size"
              src={profile}
              alt={title}
            />
            <p className="disc">{creator}</p>
            <div>
              <MdOutlineWatchLater
              className="watchLater-icon"
                onClick={() =>
                  dispatch(addToWatchLater({ video: video, token: token }))
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Cards };
