import axios from 'axios';

const TODO_API_BASE_URL = "http://localhost:8080/api/todos";

export const getAllTodos = () => axios.get(TODO_API_BASE_URL);

export const saveTodo = (todo) => axios.post(TODO_API_BASE_URL, todo);

export const getTodo = (id) => axios.get(TODO_API_BASE_URL + '/' + id);

export const updateTodo = (id, todo) => axios.put(TODO_API_BASE_URL + '/' + id, todo);

export const deleteTodo =(id) => axios.delete(TODO_API_BASE_URL + '/' + id);

export const completeTodo = (id) => axios.patch(TODO_API_BASE_URL + '/' + id + '/complete');

export const inCompleteTodo =(id) => axios.patch(TODO_API_BASE_URL + '/' + id + '/in-complete');