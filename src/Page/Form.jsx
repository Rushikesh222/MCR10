import { useData } from "../Context/CardContext";
import { useNavigate } from "react-router-dom";
export const From = () => {
  const { state, dispatch } = useData();
  const navigate = useNavigate();

  console.log(state.Data);
  console.log(state.Data.length + 1);
  const handelFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const departmentData = form.department.value;
    const nameData = form.name.value;
    const descriptionData = form.description.value;
    const priceData = form.price.value;
    const stockData = form.stock.value;
    const skuData = form.sku.value;
    const deliveredData = form.delivered.value;
    const imageData = form.image.value;
    const supplierData = form.supplier.value;

    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        id: state.Data.length + 1,
        department: departmentData,
        name: nameData,
        description: descriptionData,
        price: priceData,
        stock: stockData,
        sku: skuData,
        supplier: supplierData,
        delivered: deliveredData,
        imageUrl: imageData,
      },
    });
    navigate(`/product`);
  };
  return (
    <div>
      <form onSubmit={handelFormData}>
        <label>
          Department
          <select name="department">
            <option value="Kitchen">Kitchen</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
          </select>
        </label>

        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Description:
          <input type="textarea" name="description" />
        </label>
        <label>
          Price:
          <input type="text" name="price" />
        </label>
        <label>
          Stock:
          <input type="text" name="stock" />
        </label>
        <label>
          SKU:
          <input type="text" name="sku" />
        </label>
        <label>
          Supplier"
          <input type="text" name="supplier" />
        </label>
        <label>
          Delivered:
          <input type="text" name="delivered" />
        </label>
        <label>
          Image Url:
          <input type="text" name="image" />
        </label>
        <button>Add Product</button>
      </form>
    </div>
  );
};
