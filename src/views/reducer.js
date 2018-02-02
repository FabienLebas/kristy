
const initialState = {
  categories: [],
  loadingCategories: false
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING_CATEGORIES":
      return {
        ...initialState,
        loadingCategories: true
      };
    case "CATEGORIES_LOADED":
      return {
        ...initialState,
        loadingCategories: false,
        categories: action.categories
      };
    default:
      return state;
  }
}
