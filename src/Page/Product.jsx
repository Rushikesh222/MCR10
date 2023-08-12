import { useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../Context/CardContext";
import { Leftside } from "../Component/Leftside";
import { Filter } from "../Component/Filter";
export const Product = () => {
  const { state, dispatch } = useData();

  return (
    <div>
      <Leftside />
      <div>
        <Filter />
      </div>
      <div ca>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Supplier</th>
            </tr>
          </thead>
          <tbody>
            {state.Data.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    style={{ width: "250px", height: "250px" }}
                    src={item.imageUrl}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>${item.price}</td>
                <td>{item.stock}</td>
                <td>{item.supplier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
// id: 7,
// department: "Kitchen",
// name: "Non-Stick Frying Pan",
// description:
//   "A durable non-stick frying pan for easy cooking and cleaning.",
// price: 29.95,
// stock: 20,
// sku: "KITCH003",
// supplier: "CookEase Essentials",
// delivered: 10,
// imageUrl:
//   "https://www.anko.co.in/cdn/shop/products/71yIQACoAiL.jpg?v=1687520426",
