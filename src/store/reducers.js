import { action_changeCount, action_changeTimer } from './actions';

const date = JSON.parse(localStorage.getItem('date')) || { count: 0, timer: 0 };

const initialState = {
	count: date.count,
	timer: date.timer,
};

export const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case action_changeCount:
			return {
				...state,
				count: action.body,
			};
		case action_changeTimer:
			return {
				...state,
				timer: action.body,
			};
		default:
			return state;
	}
};
