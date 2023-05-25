import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../modules/common/consts/app-keys.const';
import { ITodoData } from '../modules/common/types/todo.types';
import TodoService from '../modules/services/todos.service';

const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();
  const createTodoHandler = async (todo: ITodoData) => {
    await TodoService.createTodo(todo);
  };
  const onSuccess = () => queryClient.refetchQueries([QUERY_KEYS.TODOS]);

  return useMutation(createTodoHandler, { onSuccess });
};

export default useCreateTodoMutation;
