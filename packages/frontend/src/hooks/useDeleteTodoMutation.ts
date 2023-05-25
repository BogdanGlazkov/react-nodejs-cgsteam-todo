import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../modules/common/consts/app-keys.const';
import TodoService from '../modules/services/todos.service';

const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  const deleteTodoHandler = async (id: string) => {
    await TodoService.deleteTodo(id);
  };
  const onSuccess = () => queryClient.refetchQueries([QUERY_KEYS.TODOS]);

  return useMutation(deleteTodoHandler, { onSuccess });
};

export default useDeleteTodoMutation;
