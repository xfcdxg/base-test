import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { setServerUrl } from 'mulan-lib'
import Routes from './routes'
import './lib/css/normalize.css'
import './lib/css/common.css'

setServerUrl('https://openapi.adleading.com/fa')
// setServerUrl('https://my9md.adleading.com/fa')

ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
