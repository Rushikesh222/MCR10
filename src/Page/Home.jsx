import { Dashboard } from "../Component/Dashboard";
import { LeftSide } from "../Component/Leftside";
import "./Page.css";
export const Home = () => {
  return (
    <div className="container">
      <div className="leftside">
        <LeftSide />
      </div>

      <div className="invintory">
        <Dashboard />
      </div>
    </div>
  );
};
