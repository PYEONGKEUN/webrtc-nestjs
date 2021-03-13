import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import 'babel-polyfill';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import './global.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import RootRouter from './RootRouter';

// hash Router를 사용중이므로 createBrowserHistory 사용 안해도 됨
ReactDOM.render(<RootRouter />, document.getElementById('root'));
