import React from "react";
import { deleteTodo } from "../api/ultil";
import "./item.css";

const Item = ({ Todos }) => {
	const handleDelete = async (id) => {
		await deleteTodo(id);
	};
	return (
		<div id="Todo-container">
			<table
				className="Todo-container"
				style={{ border: "2px solid black", borderRadius: "5px" }}
			>
				<tbody>
					<tr>
						<th>ToDo</th>
						<th>Priority</th>
						<th>Delete</th>
					</tr>
					{Todos.sort((a, b) => b.priority - a.priority).map(
						(todo, idx) => {
							return (
								<tr
									key={idx}
									style={{
										border: "1px solid black",
										borderRadius: "5px",
										padding: "10px",
									}}
								>
									<td id = "td-content">{todo.content}</td>
									<td id = "td-priority">{todo.priority}</td>
									{/* <td>
										<button>Edit</button>
									</td> */}
									<td id = "td-delete">
										<button
										id = "deleteButton"
											onClick={() =>
												handleDelete(todo.id)
											}
										>
											Delete
										</button>
									</td>
								</tr>
							);
						}
					)}
				</tbody>
			</table>
		</div>
	);
};

export default Item;
