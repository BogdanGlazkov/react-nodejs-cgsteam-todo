import { useQuery } from 'react-query';
import { ITodo } from '../modules/common/types/todo.types';
import { QUERY_KEYS } from '../modules/common/consts/app-keys.const';
import TodoService from '../modules/services/todos.service';

const useTodoQuery = (id: string) => {
  const fetchData = async () => {
    const response = await TodoService.getTodoById(id);
    return response.data;
  };
  return useQuery<ITodo>(QUERY_KEYS.TODO, fetchData);
};

export default useTodoQuery;
