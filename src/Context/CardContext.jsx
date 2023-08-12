import { createContext, useContext, useReducer } from "react";
import { InventoryReducer, initialState } from "../Reducer/Reducer";

const CardContext = createContext();
export const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(InventoryReducer, initialState);
  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
};
export const useData = () => useContext(CardContext);
