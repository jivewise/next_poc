import { PAGE_ERROR } from '../actions';

export default function(state = {}, action) {
	const { error, type } = action;

	switch (type) {
		case PAGE_ERROR:
			return {
				error,
			};
		default:
			return state;
	}
}
