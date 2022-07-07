import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VideoCards } from "../../component/Cards/VideoCards/VideoCards";
import { getLikes } from "../../store/likeSlice";
import "../Homepage/Homepage.css";

const Likepage = () => {
  const dispatch = useDispatch();
  const {
    user: { token },
  } = useSelector((store) => store.auth);
  const { likes } = useSelector((store) => store.like);
  console.log(likes);
  // const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const data = { token: token };
    dispatch(getLikes(data));
  }, [dispatch]);

  return (
    <main className="main-product">
      <div className="videoList-container">
        {likes?.map(({ _id, title, creator, profile }) => {
          return (
            <VideoCards
              key={_id}
              _id={_id}
              title={title}
              creator={creator}
              profile={profile}
            />
          );
        })}
      </div>
    </main>
  );
};
export { Likepage };
