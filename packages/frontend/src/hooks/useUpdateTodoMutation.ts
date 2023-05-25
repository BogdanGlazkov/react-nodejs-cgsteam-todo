import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../modules/common/consts/app-keys.const';
import { ITodo } from '../modules/common/types/todo.types';
import TodoService from '../modules/services/todos.service';

const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();
  const updateTodoHandler = async (todo: ITodo) => {
    await TodoService.updateTodo(todo.id, todo);
    await queryClient.refetchQueries([QUERY_KEYS.TODOS]);
  };
  const onSuccess = () => queryClient.refetchQueries([QUERY_KEYS.TODOS]);

  return useMutation(updateTodoHandler, { onSuccess });
};

export default useUpdateTodoMutation;
