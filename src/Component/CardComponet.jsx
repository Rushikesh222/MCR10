import { useNavigate } from "react-router-dom";
import { useData } from "../Context/CardContext";
import "./CardComponent.css";
export const CardComponent = () => {
  const { dispatch } = useData();
  const navigate = useNavigate();
  return (
    <div className="card-component">
      <button
        className="dept-button"
        onClick={() => {
          dispatch({ type: "SET_PRODUCT", payload: "Kitchen" }),
            navigate(`/product`);
        }}
      >
        Kitchen
      </button>
      <button
        className="dept-button"
        onClick={() => {
          dispatch({ type: "SET_PRODUCT", payload: "Clothing" }),
            navigate(`/product`);
        }}
      >
        Clothing
      </button>
      <button
        className="dept-button"
        onClick={() => {
          dispatch({ type: "SET_PRODUCT", payload: "Toys" }),
            navigate(`/product`);
        }}
      >
        Toys
      </button>
    </div>
  );
};
