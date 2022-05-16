import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Item, Container, List } from "semantic-ui-react";
import { toast } from "react-toastify";
import axios from "axios";
import ReviewOrder from "./ReviewOrder";
import ArticlesAPI from "../modules/ArticlesAPI";
import store from "../state/store/configureStore";
import { useSelector } from "react-redux";

const Products = () => {
  const { products, order } = useSelector((state) => state);
  const { dispatch } = store;

  const displayProducts = (products) => {
    let productsArray = [];
    Object.entries(products).map((category) => {
      productsArray.push(category[1]);
    });
    return productsArray.flat();
  };

  useEffect(() => {
    ArticlesAPI.fetchProducts();
  }, []);

  const addToOrder = async (id) => {
    // const toastSetting = { autoClose: 1500, toastId: "message-box" };
    if (!order.id) {
      const response = await axios.post("https://reqres.in/api/orders", {
        params: { product_id: id },
      });
      dispatch({ type: "SET_ORDER", payload: response.data.order });
      toast(response.data.message, { toastId: "message-box-order-create" });
    } else {
      const response = await axios.put("https://reqres.in/api/orders", {
        params: { order_id: order.id, product_id: id },
      });
      dispatch({ type: "SET_ORDER", payload: response.data.order });
      toast(response.data.message, { toastId: "message-box-order-update" });
    }
  };

  const productlist = displayProducts(products).map((product) => {
    return (
      <Card key={product.id}>
        <Item.Content>
          <Item.Image
            size="tiny"
            src={product.image}
            style={{ height: 200 + "px", width: "auto" }}
          />
          <Item.Header>{product.name}</Item.Header>
          <Item.Meta> {`${product.price}kr`}</Item.Meta>
          <Item.Description>{product.description}</Item.Description>
          <button
            data-cy="order-button"
            onClick={() => addToOrder(product.id)}
            className="ui button"
          >
            {" "}
            order +
          </button>
        </Item.Content>
      </Card>
    );
  });
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: 30,
        }}
      >
        <ReviewOrder />
      </div>
      <br />
      <Container>
        <br />
        <List inverted data-cy="products-list" size="big">
          {productlist}
        </List>
      </Container>
    </>
  );
};

export default Products;
