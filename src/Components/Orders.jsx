import { api } from "../network.js";

const Orders = {
  async create(product_id) {
    const { data } = await api.post("https://reqres.in/api/products", {
      params: { product_id: product_id },
    });

    return data;
  },

  async update(product_id, order_id) {
    const { data } = await api.put("https://reqres.in/api/products", {
      params: { product_id: product_id, order_id: order_id },
    });

    return data;
  },
};

export default Orders;
