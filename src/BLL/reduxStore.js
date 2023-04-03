import {combineReducers, legacy_createStore as createStore} from "redux";
import commentReducer from './reducers/commentReducer';
import dialogsReducer from './reducers/dialogsReducer';
import whatWeDoReducer from './reducers/whatWeDoReducer';
import mastersReducer from './reducers/mastersReducer';
import goodsReducer from './reducers/goodsReducer';
import blogReducer from './reducers/blogReducer';

let reducers = combineReducers({
	dataCommentPage: commentReducer,
	dataDialogsPage: dialogsReducer,
	dataWWD: whatWeDoReducer,
	dataMasters: mastersReducer,
	dataGoods: goodsReducer,
	dataBlog: blogReducer,
});

let store = createStore(reducers);

export default store;