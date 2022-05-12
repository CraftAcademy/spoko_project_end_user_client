import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Authentication from "../modules/Authentication";
import { Button, Container, Form, Input } from "semantic-ui-react";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const { activeArticle } = useSelector((state) => state);
  let navigate = useNavigate();

  const handleLogin = async (event) => {
    const toastSetting = { autoClose: 500, toastId: "message-box" };

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const response = await Authentication.signIn(email, password);

    if (response.data.uid) {
      dispatch({
        type: "SET_USER_AUTHENTICATED",
        payload: true,
      });
      toast("Login successful", toastSetting);
      activeArticle ? navigate(`/article/${activeArticle.id}`) : navigate("/");
    }
  };
  const options = {
    padding: "6px 10px",
    margin: "10px 0px",
    border: "1px solid lightgrey",
    borderRadius: "3px",
    width: "100%",

    style: {
      base: {
        fontSize: "20px",
        "::placeholder": {
          color: "lightgrey",
        },
      },
      invalid: {
        backgroundColor: "lightgrey",
      },
    },
  };

  const fieldOptions = {
    padding: "10px",
    margin: "10px 10px 10px",
    border: "1px solid lightgrey",
    borderRadius: "3px",
    width: "50%",
  };

  const labelOptions = { margin: "10px 10px 0", fontSize: "18px" };
  return (
    <>
      <h3>Please fill out the form</h3>
      <label style={labelOptions}>Email</label>
      <input options={options} />
      <br />
      <br />
      <label style={labelOptions}>Password</label>
      <input data-cy="password" options={options} />
      <br />
      <br />
      <button data-cy="submit-payment" onClick={handleLogin}>
        Submit
      </button>
    </>
  );

  // return (
  //   <>
  //     <Container>
  //       <Form onSubmit={handleLogin}>
  //         <Form.Field
  //           name="email"
  //           data-cy="login-email"
  //           placeholder="your@emails"
  //           control={Input}
  //           label="Email"
  //         />
  //         <Form.Field
  //           name="password"
  //           data-cy="login-password"
  //           type="password"
  //           control={Input}
  //           label="Password"
  //           placeholder="Password"
  //         />
  //         <Form.Field
  //           data-cy="submit-button"
  //           content="Login"
  //           control={Button}
  //           color="teal"
  //         />
  //       </Form>
  //     </Container>
  //   </>
  // );
};

export default Login;
