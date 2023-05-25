import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../modules/common/consts/app-keys.const';
import TodoService from '../modules/services/todos.service';

const useTodosQuery = () => {
  const fetchData = async () => {
    const response = await TodoService.getAllTodos();
    return response.data;
  };
  return useQuery(QUERY_KEYS.TODOS, fetchData);
};

export default useTodosQuery;
