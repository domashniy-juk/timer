import React, { useState, useEffect } from 'react';

import './App.css';

const App = () => {
	let [count, setCount] = useState(0);
    let [timer, setTimer] = useState(0.5);
    
    const inc = () => setCount(count++)

	const start = () => {
		if (timer && !count) {
			inc();
			setTimer(setInterval(() => inc(), 1000));
		}
	};

	const change = () => {
		if (timer && count) {
			clearInterval(timer);
			setTimer(0);
		} else if (count && !timer) {
			inc();
			setTimer(setInterval(() => inc(), 1000));
		}
	};

	const remove = () => {
		setCount(0);
		clearInterval(timer);
		setTimer(0.5);
	};

	useEffect(() => () => clearInterval(timer), []);

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
				{timer ? (
					<button onClick={change}>Стоп</button>
				) : (
					<button onClick={change}>Продолжить</button>
				)}
				<button onClick={remove}>Сброс</button>
			</div>
		</div>
	);
};

export default App;
