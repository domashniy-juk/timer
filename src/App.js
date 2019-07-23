import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeCount, changeTimer } from './store/actions';

import './App.sass';

const stateToProps = state => {
	return {
		...state,
	};
};

const actionProps = {
	changeCount,
	changeTimer,
};

const App = ({ count, timer, changeCount, changeTimer }) => {
	const inc = () => {
		changeCount(count++);
		changeTimer(setInterval(() => changeCount(count++), 1000));
	};

	const start = () => {
		if (!timer) inc();
	};

	const change = () => {
		if (timer && count && timer !== 1.5) {
			clearInterval(timer);
			changeTimer(1.5);
		} else if (count && timer === 1.5) inc();
	};

	const remove = () => {
		changeCount(0);
		clearInterval(timer);
		changeTimer(0);
	};

	useEffect(() => {
		if (timer && timer !== 1.5) inc();
	}, []);

	useEffect(() => () => clearInterval(timer), []);

	useEffect(() => {
		let state = JSON.stringify({ count, timer });
		localStorage.setItem('date', state);
	});

	return (
		<div className="main">
			<div className="main-circle">
				<div
					className="main-circle-arrow"
					style={{ transform: `rotate(${(count - 15) * 6}deg)` }}
				/>
			</div>
			<div className="main-count">счетчик: {count}</div>
			<div>
				<button onClick={start}>Старт</button>
				{timer !== 1.5 && timer ? (
					<button onClick={change}>Стоп</button>
				) : (
					<button onClick={change}>Продолжить</button>
				)}
				<button onClick={remove}>Сброс</button>
			</div>
		</div>
	);
};

export default connect(
	stateToProps,
	actionProps
)(App);
