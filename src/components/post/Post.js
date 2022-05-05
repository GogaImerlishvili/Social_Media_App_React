import "./post.css";
import { MoreVert } from "@mui/icons-material";

const Post = () => {
  return (
    <div className="post">
      <div className="post__Wrapper">
        <div className="post__Top">
          <div className="postTo__Left">
            <img
              src="/assets/person/goga.jpg"
              alt=""
              className="profile__Img"
            />
            <span className="post__Username">Goga Imerlishvili</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTo__Right">
            <MoreVert />
          </div>
        </div>
        <div className="post__Center">
          <span className="post__Text">Hey! Its my first post:)</span>
          <img className="post__Img" src="/assets/posts/1 (1).jpeg" alt="" />
        </div>
        <div className="post__Bottom">
          <div className="bottom__Left">
            <img className="like__Icon" src="/assets/like.png" alt="" />
            <img className="like__Icon" src="/assets/heart.png" alt="" />
            <span className="like__Counter">32 people like it</span>
          </div>
          <div className="bottom__Right">
            <span className="post__Comment">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
