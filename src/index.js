import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Reducer } from './store/reducers';

import './index.sass';

import App from './App';

const store = createStore(Reducer);

ReactDOM.render(
	<Provider store={store}>
		{' '}
		<App />{' '}
	</Provider>,
	document.getElementById('root')
);
