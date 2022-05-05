import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
const Share = () => {
  return (
    <div className="share">
      <div className="share__Wrapper">
        <div className="share__Top">
          <img className="share__Img" src="/assets/person/goga.jpg" alt="" />
          <input placeholder="What's in your mind?" className="share__Input" />
        </div>
        <hr className="share__Hr" />
        <div className="share__Bottom">
          <div className="share__Options">
            <div className="share_Option">
              <PermMedia htmlColor="tomato" className="share__Icon" />
              <span className="option__Text">Photo</span>
            </div>
            <div className="share_Option">
              <Label htmlColor="blue" className="share__Icon" />
              <span className="option__Text">Tag</span>
            </div>
            <div className="share_Option">
              <Room htmlColor="green" className="share__Icon" />
              <span className="option__Text">Location</span>
            </div>
            <div className="share_Option">
              <EmojiEmotions htmlColor="goldenrod" className="share__Icon" />
              <span className="option__Text">Feelings</span>
            </div>
          </div>
          <button className="share__Button">share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
