import authReducers from "./reducers/authReducers";
import modelReducer from "./reducers/modelReducer";
import brandReducer from "./reducers/brandReducer";
import productReducer from "./reducers/productReducer";
import sellerReducer from "./reducers/sellerReducer";
import chatReducer from "./reducers/chatReducer";
import OrderReducer from "./reducers/OrderReducer";


const rootReducers = {
    auth: authReducers,
    model: modelReducer,
    brand: brandReducer,
    product: productReducer,
    seller: sellerReducer,
    chat: chatReducer,
    order: OrderReducer
};

export default rootReducers;