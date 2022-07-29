import axios from "axios";

export const getAllToDoList = async () => {
	const data = await axios
		.get(`http://localhost:8080/api/todos`)
		.then((response) => response.data);
	return data;
};

export const createToDo = async (content, priority) => {
	return await axios
		.post(`http://localhost:8080/api/todos`, {
			content: content,
			priority: priority,
		})
		.then((response) => response.data);
};

export const deleteTodo = async (id) => {
    return await axios.delete(`http://localhost:8080/api/todos/${id}`);
}