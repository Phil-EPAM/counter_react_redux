import React from 'react';
import ReactDOM from 'react-dom';


const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
};

const Counter = ({ value, onIncrement, onDecrement } ) => (
	<div>
		<h1>{ value }</h1>
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>		
	</div>
)

import { createStore } from 'redux';
var store = createStore(counter);

const render = () => {
	ReactDOM.render(
		<Counter value = {store.getState()}
				 onIncrement = {() => {
				 	store.dispatch({ type: 'INCREMENT' });
				 }}
				 onDecrement = {() => {
				 	store.dispatch({ type: 'DECREMENT' });
				 }}

				 />, document.getElementById('root2')

	)
};
store.subscribe(render);
render();

// const addCounter = (list) => {
// 	return [...list, 0];
// };

// const removeCounter = (list, index) => {
// 	return [...list.slice(0, index),
// 			...list.slice(index + 1)
// 			];
// };

// const incrementCounter = (list, index) => {
// 	return [...list.slice(0, index),
// 			...list[index]+1,
// 			...list.slice(index + 1)
// 			]
// }

// const toggleTodo = ( todo ) => {
// 	return state.map( todo => {
// 		if ( todo.id ) !== action.id {
// 			return todo;
// 		}
// 		return {...todo, completed: !todo.completed }
// 	})
// }
















