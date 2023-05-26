import { getRepository } from 'typeorm';
import { Todo } from '../entities/Todo.entity';
import { ITodo } from '../types/todos.type';

class TodoService {
  async findAll() {
    const todosRepository = getRepository(Todo);
    const todos = await todosRepository.find({
      order: {
        id: 'ASC'
      }
    });
    return todos;
  }

  async findPrivateTodos(id: number) {
    const todosRepository = getRepository(Todo);
    const todos = await todosRepository.find({
      where: {
        userId: id,
        privateTodo: true
      }
    });
    return todos;
  }

  async add(credential: ITodo, userId: number) {
    const todoRepository = getRepository(Todo);
    const todo = todoRepository.create({ ...credential, userId });
    const response = await todoRepository.save(todo);
    return response;
  }

  async findById(id: number) {
    const todosRepository = getRepository(Todo);
    const todo = await todosRepository.findOneBy({ id });
    return todo;
  }

  async deleteById(id: number) {
    const todosRepository = getRepository(Todo);
    const todo = await todosRepository.delete(id);
    return todo;
  }

  async updateById(id: number, credential: ITodo) {
    const todosRepository = getRepository(Todo);
    const updateTodo = await todosRepository.update(id, credential);
    return updateTodo;
  }
}

export const todoService = new TodoService();
