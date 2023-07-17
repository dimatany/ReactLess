import {combineReducers, legacy_createStore as createStore} from "redux";
import commentReducer from './reducers/commentReducer';
import whatWeDoReducer from './reducers/whatWeDoReducer';
import mastersReducer from './reducers/mastersReducer';
import goodsReducer from './reducers/goodsReducer';
import blogReducer from './reducers/blogReducer';
import loginReducer from './reducers/loginReducer';

let reducers = combineReducers({
	dataCommentPage: commentReducer,
	dataWWD: whatWeDoReducer,
	dataMasters: mastersReducer,
	dataGoods: goodsReducer,
	dataBlog: blogReducer,
	dataLogin: loginReducer,//edd
});

let store = createStore(reducers);

export default store;




