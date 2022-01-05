import React from "react";
import { TodoProvider} from '../TodoContext'
import { AppUI } from './AppUI';

/*const defaultTodos = [
	{text: 'Cortar cebolla', completed: true},
	{text: 'Cortar tomate', completed: false},
	{text: 'Cortar pimenton', completed: true},
	{text: 'Cortar ajo', completed: false},
];*/

function App(props) {

	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
}

export default App;
