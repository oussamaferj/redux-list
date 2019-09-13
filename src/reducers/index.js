import { ADD_ARTICLE,DELETE_ARTICLE} from "../constants/action-types";
const initialState = {
  articles: []
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    console.log(state.articles);
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  else if (action.type === DELETE_ARTICLE) {
    console.log(state.articles);
    console.log(action.payload);
      return Object.assign({}, state, {
      articles: state.articles.filter((item,i) => i !=action.payload)
    });
    };
    return state;
  }
  

export default rootReducer;