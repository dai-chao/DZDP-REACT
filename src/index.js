import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Rout from "./router/index"
import "./icon/font_scgz40ba2/iconfont.css"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Rout/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
