import { Dashboard } from "../Component/Dashboard";
import { Leftside } from "../Component/Leftside";
import "./Page.css";
export const Home = () => {
  return (
    <div className="container">
      <div className="leftside">
        <Leftside />
      </div>

      <div className="invintory">
        <Dashboard />
      </div>
    </div>
  );
};
