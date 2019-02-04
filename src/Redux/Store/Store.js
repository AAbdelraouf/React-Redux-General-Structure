import {createStore} from 'redux';
import Reducer from '../Reducer/Reducer'
const initialState = [0]

const Store = createStore(Reducer, initialState);

export default Store