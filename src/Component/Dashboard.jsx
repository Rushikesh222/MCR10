import { useData } from "../Context/CardContext";
import "./DashBoard.css";
export const Dashboard = () => {
  const { state } = useData();
  const Stock = state.Data.reduce((acc, curr) => acc + curr.stock, 0);
  const Delivered = state.Data.reduce((acc, curr) => acc + curr.delivered, 0);
  const lowStock = state.Data.filter((items) => items.stock <= 10).length;
  return (
    <div className="dashboard-container">
      <div className="details">
        <h3 className="stock">{Stock}</h3>
        <p>Total Stock</p>
      </div>
      <div className="details">
        <h3 className="delivered">{Delivered}</h3>
        <p>Total Delivered</p>
      </div>
      <div className="details">
        <h3 className="low">{lowStock}</h3>
        <p>Total Stock</p>
      </div>
    </div>
  );
};
