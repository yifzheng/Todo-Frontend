import axios from "axios";

export const getAllToDoList = async () => {
	const data = await axios
		.get(`https://todos-backendapp.herokuapp.com/api/todos`)
		.then((response) => response.data);
	return data;
};

export const createToDo = async (content, priority) => {
	return await axios
		.post(`https://todos-backendapp.herokuapp.com/api/todos`, {
			content: content,
			priority: priority,
		})
		.then((response) => response.data);
};

export const deleteTodo = async (id) => {
    return await axios.delete(`https://todos-backendapp.herokuapp.com/api/todos/${id}`);
}