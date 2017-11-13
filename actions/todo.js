import { ADD_TODO, REMOVE_TODO, PAGE_ERROR } from './';

export function addTodo(text) {
	return {
		type: ADD_TODO,
		text
	};
}

export function removeTodo(todo) {
	return {
		type: REMOVE_TODO,
		todo
	};
}

export function pageError(error) {
	return {
		type: PAGE_ERROR,
		error,
	};
};
