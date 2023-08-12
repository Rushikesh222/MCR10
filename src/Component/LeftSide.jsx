import { NavLink } from "react-router-dom";
import "./leftside.css";
export const LeftSide = () => {
  return (
    <div className="left-nav">
      <div className="links">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/department">Department</NavLink>
        <NavLink to="/product">Product</NavLink>
      </div>
    </div>
  );
};
