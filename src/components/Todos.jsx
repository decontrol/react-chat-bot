import { useEffect } from 'react';

const Todos = (props) => {
	const { todos, setState } = props;

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((res) => res.json())
			.then((data) => {
				const fiveFirstTodos = data.slice(0, 5);

				setState((state) => ({ ...state, todos: fiveFirstTodos }));
			});
	}, []);

	console.log(props);

	const renderTodos = () => {
		return todos.map((todo) => <li key={todo.id}>{todo.title}</li>);
	};

	return (
		<div className='#1e293b'>
			<ul>{renderTodos()}</ul>
		</div>
	);
};
export default Todos;
