import { Menu, Segment } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { userAuthenticated } = useSelector((state) => state);
  const navigate = useNavigate();

  return (
    <Segment inverted color="blue">
      <Menu inverted secondary>
        <Menu.Item
          data-cy="home-tab"
          name="Home"
          as={Link}
          to={{ pathname: "/" }}
        />
        <Menu.Item
          data-cy="football-tab"
          name="Football"
          as={NavLink}
          to={{ pathname: "/football" }}
        />
        <Menu.Item
          data-cy="golf-tab"
          name="Golf"
          as={NavLink}
          to={{ pathname: "/golf" }}
        />
        <Menu.Item
          data-cy="product-tab"
          name="Shop"
          as={NavLink}
          to={{ pathname: "/products" }}
        />
        {(!userAuthenticated && (
          <Menu.Item
            data-cy="login-button"
            name="Login"
            as={NavLink}
            to={{ pathname: "/login" }}
          />
        )) || (
          <>
            <Menu.Item data-cy="logged-button" name="Logged in" />
            <Menu.Item
              data-cy="subscription-button"
              name="Become a subscriber"
              onClick={() => navigate("/payment")}
            />
          </>
        )}
      </Menu>
    </Segment>
  );
};

export default Navbar;
