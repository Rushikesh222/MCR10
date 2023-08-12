import { useData } from "../Context/CardContext";
import { useNavigate } from "react-router-dom";

export const Filter = () => {
  const { state, dispatch } = useData();
  const navigate = useNavigate();
  const handleType = (e) => {
    dispatch({
      type: "SET_FILTER",
      payload: e.target.value,
    });
  };
  const handleName = (e) => {
    dispatch({
      type: "FILTER_SORT",
      payload: e.target.value,
    });
  };
  const handleLowStock = (e) => {
    dispatch({
      type: "CHECK_LOWSTOCK",
      payload: e.target.value,
    });
  };

  return (
    <div>
      <div className="filter_type">
        <select className="option" onChange={handleType}>
          <option value="ALl">All</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
        </select>
      </div>
      <div className="lowStock">
        <label>
          <input
            type="CheckBox"
            checked={state.showLowstock}
            name="check"
            onChange={handleLowStock}
          />
          Low Stock Items
        </label>
      </div>
      <div className="filter_name">
        <select className="option" onChange={handleName}>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>
      </div>
      <div>
        <button onClick={() => navigate(`/form`)}>New</button>
      </div>
    </div>
  );
};
