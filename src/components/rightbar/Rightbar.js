import "./rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbar__Wrapper">
        <div className="birthday__Container">
          <img className="birthday__Img" src="/assets/gift.png" alt="" />
          <span className="birthday__Text">
            <b>Pola Foster </b>and <strong>3 other friends</strong> have a
            birthday today
          </span>
        </div>
        <img className="rightbar__Ad" src="/assets/ad.png" alt="" />
        <h4 className="rightbar__Title">Online Friends</h4>
        <ul className="friend__List">
          <li className="friend">
            <div className="profileImg__Container">
              <img className="image" src="/assets/person/3.jpeg" alt="" />
              <span className="rightbar__Online"></span>
            </div>
            <span className="rightbar__Username">John Carter</span>
          </li>
          <li className="friend">
            <div className="profileImg__Container">
              <img className="image" src="/assets/person/3.jpeg" alt="" />
              <span className="rightbar__Online"></span>
            </div>
            <span className="rightbar__Username">John Carter</span>
          </li>
          <li className="friend">
            <div className="profileImg__Container">
              <img className="image" src="/assets/person/3.jpeg" alt="" />
              <span className="rightbar__Online"></span>
            </div>
            <span className="rightbar__Username">John Carter</span>
          </li>
          <li className="friend">
            <div className="profileImg__Container">
              <img className="image" src="/assets/person/3.jpeg" alt="" />
              <span className="rightbar__Online"></span>
            </div>
            <span className="rightbar__Username">John Carter</span>
          </li>
          <li className="friend">
            <div className="profileImg__Container">
              <img className="image" src="/assets/person/3.jpeg" alt="" />
              <span className="rightbar__Online"></span>
            </div>
            <span className="rightbar__Username">John Carter</span>
          </li>
          <li className="friend">
            <div className="profileImg__Container">
              <img className="image" src="/assets/person/3.jpeg" alt="" />
              <span className="rightbar__Online"></span>
            </div>
            <span className="rightbar__Username">John Carter</span>
          </li>
          <li className="friend">
            <div className="profileImg__Container">
              <img className="image" src="/assets/person/3.jpeg" alt="" />
              <span className="rightbar__Online"></span>
            </div>
            <span className="rightbar__Username">John Carter</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
