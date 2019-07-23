export const action_changeCount = 'change_count';
export const action_changeTimer = 'change_timer';

export const changeCount = body => {
	return {
		type: action_changeCount,
		body,
	};
};
export const changeTimer = body => {
	return {
		type: action_changeTimer,
		body,
	};
};
