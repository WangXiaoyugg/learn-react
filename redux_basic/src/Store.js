/** * Created by wangxiaoyu on 2017/8/18. */import {createStore} from 'redux';import reducer from './Reducer'const initValues = {    'First':0,    'Second':10,    'Third':20};//函数，初始值const store = createStore(reducer,initValues);export default store;