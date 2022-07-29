import * as React from "react";
import { useState, useEffect } from "react";
import { getAllToDoList, createToDo } from "./api/ultil";
import Item from "./components/item";
import "./App.css";

function App() {
	const [content, setContent] = useState("");
	const [priority, setPriority] = useState(0);
	const [toDoList, setToDoList] = useState([]);

	useEffect(() => {
		logData();
	},);

	const logData = async () => {
		const list = await getAllToDoList();
		setToDoList(list);
	};

	const handleChange = (event) => {
		setContent(event.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (priority > 0 || content === "") {
			await createToDo(content, priority);
			setContent("");
			setPriority(0);
		} else {
			alert("Both fields needs to be filled: content and priority");
		}
	};

	return (
		<div className="App">
      <header>What are your ToDos</header>
			<section className="textField">
				<input
					id="Todo-TextField"
					variant="outlined"
					type="text"
					autoFocus
					onChange={handleChange}
				/>
				<br />
				<select
					id="priority"
					className="prioritySelector"
					onChange={(e) => setPriority(e.target.value)}
					required
				>
					<option>Select a priority</option>
					<option value="5">5</option>
					<option value="4">4</option>
					<option value="3">3</option>
					<option value="2">2</option>
					<option value="1">1</option>
				</select>
				<button id="createToDo" onClick={handleSubmit}>Save</button>
			</section>
			{toDoList.length > 0 && (
				<section className="Todo-List">
					<Item Todos={toDoList} />
				</section>
			)}
		</div>
	);
}

export default App;
