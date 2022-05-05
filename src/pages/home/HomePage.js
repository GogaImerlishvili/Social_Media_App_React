import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";

const HomePage = () => {
  return (
    <>
      <Topbar />
      <div className="home__Container">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default HomePage;
