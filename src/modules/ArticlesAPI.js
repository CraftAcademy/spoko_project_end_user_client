import store from "../state/store/configureStore";
import SpokoAPI from "./SpokoAPI";


const { dispatch } = store;

const ArticlesAPI = {
  async index() {
    const response = await SpokoAPI.get("/articles");
    dispatch({ type: "SET_ARTICLES", payload: response.data.articles });
  },
  async show(id) {
    const response = await SpokoAPI.get(`/article/${id}`);
    dispatch({ type: "SET_ACTIVE_ARTICLE", payload: response.data.article });
  },
  async fetchProducts() {
    const response = await SpokoAPI.get("/products/");
    dispatch({ type: "SET_PRODUCTS", payload: response.data.products });
  },

  async getLocation() {
    const position = await fetchUserCoordinates();

    if (position.error) {
      dispatch({
        type: "SET_USER_COUNTRY",
        payload: "location cannot be detected",
      });
    } else {
      const openCageResponse = await SpokoAPI.get(
        "https://api.opencagedata.com/geocode/v1/json",
        {
          params: {
            key: process.env.REACT_APP_OPENCAGEAPI_KEY,
            q: `${position.coords.latitude}+${position.coords.longitude}`,
          },
        }
      );
      dispatch({
        type: "SET_USER_COUNTRY",
        payload: openCageResponse?.data.results[0].components.country,
      });
    }
  },
};
function fetchUserCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
    });
  });
}

export default ArticlesAPI;
