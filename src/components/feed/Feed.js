import "./feed.css";
import Share from "../../components/share/Share";
import Post from "../post/Post";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__Wrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
