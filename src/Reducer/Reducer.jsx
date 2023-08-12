import { inventoryData } from "../assets/Data";

export const initialState = {
  Data: inventoryData,
  showLowStock: false,
};
export const InventoryReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_PRODUCT":
      return {
        ...state,
        Data: [...state.Data].filter((list) => list.department === payload),
      };
    case "SET_FILTER":
      const filterData =
        payload === "ALL"
          ? state.Data
          : state.Data.filter((items) => items.department === payload);
      return {
        ...state,
        Data: filterData,
      };
    case "CHECK_LOWSTOCK":
      let filterStock = state.showLowStock
        ? state.Data.filter((items) => items.stock <= 10)
        : state.Data;
      return {
        ...state,
        Data: filterStock,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        Data: [...state.Data, payload],
      };

    case "FILTER_SORT":
      const sortData = state.Data.sort((a, b) => {
        if (payload === "name") {
          return a.name.localeCompare(b.name);
        } else if (payload === "stock") {
          return a.stock - b.stock;
        } else if (payload === "price") {
          return a.price - b.price;
        }
      });
      console.log(sortData);

      return {
        ...state,
        Data: sortData,
      };

    default:
      return state;
  }
};
