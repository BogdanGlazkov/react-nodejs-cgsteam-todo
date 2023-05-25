import axios from 'axios';
import { ITodoData } from '../common/types/todo.types';
import { HttpService } from './http.service';

axios.defaults.baseURL = process.env.BASE_URL;

class TodoService extends HttpService {
  static async getAllTodos() {
    return axios.get('/api/todos');
  }

  static async getTodoById(id: string) {
    return axios.get(`/api/todos/${id}`);
  }

  static async createTodo(todo: ITodoData) {
    return axios.post('/api/todos/', todo);
  }

  static async updateTodo(id: string, todo: ITodoData) {
    return axios.put(`/api/todos/${id}`, todo);
  }

  static async deleteTodo(id: string) {
    return axios.delete(`/api/todos/${id}`);
  }
}

export default TodoService;
