import "./sidebar.css";
import {
  Chat,
  School,
  RssFeed,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__Wrapper">
        <ul className="sidebar__List">
          <li className="sidebar__ListItem">
            <RssFeed className="sidebarIcon" />
            <span className="List__Item">Feed</span>
          </li>
          <li className="sidebar__ListItem">
            <Chat className="sidebarIcon" />
            <span className="List__Item">Chats</span>
          </li>
          <li className="sidebar__ListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="List__Item">Videos</span>
          </li>
          <li className="sidebar__ListItem">
            <Group className="sidebarIcon" />
            <span className="List__Item">Groups</span>
          </li>
          <li className="sidebar__ListItem">
            <Bookmark className="sidebarIcon" />
            <span className="List__Item">Bookmarks</span>
          </li>
          <li className="sidebar__ListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="List__Item">Questions</span>
          </li>
          <li className="sidebar__ListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="List__Item">Jobs</span>
          </li>
          <li className="sidebar__ListItem">
            <Event className="sidebarIcon" />
            <span className="List__Item">Events</span>
          </li>
          <li className="sidebar__ListItem">
            <School className="sidebarIcon" />
            <span className="List__Item">Courses</span>
          </li>
        </ul>
        <button className="sidebar__Button">Show More</button>
        <hr className="sidebar__Hr" />
        <ul className="friend__List">
          <li className="sidebar__Friend">
            <img
              className="friend__Img"
              src="/assets/person/2.jpeg"
              alt="friend"
            />
            <span className="friend__Name">John dude</span>
          </li>
          <li className="sidebar__Friend">
            <img
              className="friend__Img"
              src="/assets/person/2.jpeg"
              alt="friend"
            />
            <span className="friend__Name">John dude</span>
          </li>
          <li className="sidebar__Friend">
            <img
              className="friend__Img"
              src="/assets/person/2.jpeg"
              alt="friend"
            />
            <span className="friend__Name">John dude</span>
          </li>
          <li className="sidebar__Friend">
            <img
              className="friend__Img"
              src="/assets/person/2.jpeg"
              alt="friend"
            />
            <span className="friend__Name">John dude</span>
          </li>
          <li className="sidebar__Friend">
            <img
              className="friend__Img"
              src="/assets/person/2.jpeg"
              alt="friend"
            />
            <span className="friend__Name">John dude</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
