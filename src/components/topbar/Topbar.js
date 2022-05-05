import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className="barContainer">
      <div className="barLeft">
        <span className="logo">GogaSocial</span>
      </div>
      <div className="barCenter">
        <div className="search__bar">
          <Search className="search__Icon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="barRight">
        <div className="barLink">
          <span className="bar__Link">Homepage</span>
          <span className="bar__Link">Timeline</span>
        </div>
        <div className="barIcons">
          <div className="barIcons__Item">
            <Person />
            <span className="barIcon__Badge">1</span>
          </div>
          <div className="barIcons__Item">
            <Chat />
            <span className="barIcon__Badge">1</span>
          </div>
          <div className="barIcons__Item">
            <Notifications />
            <span className="barIcon__Badge">1</span>
          </div>
        </div>
        <img src="/assets/person/goga.jpg" alt="Profile" className="bar__img" />
      </div>
    </div>
  );
};

export default Topbar;
