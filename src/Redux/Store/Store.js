import {createStore} from 'redux';
import Reducer from '../Reducer/Reducer'
const initialState = []

const Store = createStore(Reducer, initialState);

export default Store