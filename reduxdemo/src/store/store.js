
import {createStore} from "redux"
import counterreducer from "../counterreducer";


const store = createStore(counterreducer);

export default store