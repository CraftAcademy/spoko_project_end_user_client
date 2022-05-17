const rootReducer = (state, action) => {
  switch (action.type) {
    case "SET_ARTICLES":
      return {
        ...state,
        articles: action.payload,
      };
    case "SET_ACTIVE_ARTICLE":
      return {
        ...state,
        activeArticle: action.payload,
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "SET_USER_AUTHENTICATED":
      return {
        ...state,
        userAuthenticated: action.payload,
      };

    case "SET_ORDER":
      return {
        ...state,
        order: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
