/** * Created by wangxiaoyu on 2017/8/18. */import { PropTypes, Component } from 'react';//提供context,渲染字组件class Provider extends Component {    getChildContext() {        return {            store: this.props.store        };    }    render() {        return this.props.children;    }}Provider.propTypes = {    store:PropTypes.object.isRequired};Provider.childContextTypes = {    store:PropTypes.object};export default Provider;