import { ITodoData } from '../types/todo.types';

export const initialFormValues = (props: ITodoData) => {
  if (props) {
    const { title, description, isCompleted, isPrivate } = props;
    if (
      title !== undefined &&
      description !== undefined &&
      isCompleted !== undefined &&
      isPrivate !== undefined
    ) {
      return { title, description, isCompleted, isPrivate };
    }
  }
  return { title: '', description: '', isCompleted: false, isPrivate: false };
};
