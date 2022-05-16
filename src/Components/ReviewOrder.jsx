import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, List, Container } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import store from "../state/store/configureStore";

const ReviewOrder = () => {
  const [open, setOpen] = useState(false);
  const { order } = useSelector((state) => state);
  const { dispatch } = store;

  const fetchOrder = async () => {
    const response = await axios.get(
      `https://reqres.in/api/orders/${order.id}`
    );

    if (response.data.message) {
      toast.warn(response.data.message, { toastId: "message-box" });
      setOpen(false);
    } else {
      dispatch({ type: "SET_ORDER", payload: response.data.order });
    }
  };

  const orderList = order?.products?.map((product) => {
    return <List.Item key={product.id}>{product.name}</List.Item>;
  });

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button onClick={fetchOrder} data-cy="show-order">
            Review Order
          </Button>
        }
      >
        <Modal.Header>Your Order</Modal.Header>
        <Modal.Content>
          <List data-cy="order-list">{orderList}</List>
        </Modal.Content>
        <Modal.Actions>
          <Container data-cy="total-cost"> Total {order?.total}kr</Container>
        </Modal.Actions>
      </Modal>
      <ToastContainer data-cy="message-box" />
    </>
  );
};

export default ReviewOrder;
