import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import { useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MEDIA_KEYS } from '../../consts/app-keys.const';
import { ITodo } from '../../types/todo.types';
import MobileLayout from './layouts/todo.mobile.layout';
import TabletLayout from './layouts/todo.tablet.layout';
import DesktopLayout from './layouts/todo.desktop.layout';
import useUpdateTodoMutation from '../../../../hooks/useUpdateTodoMutation';
import useDeleteTodoMutation from '../../../../hooks/useDeleteTodoMutation';

export const TodoComponent = ({ id, title, description, isPrivate, isCompleted }: ITodo) => {
  const navigate = useNavigate();
  const isMobileScreen = useMediaQuery(MEDIA_KEYS.mobile);
  const isTabletScreen = useMediaQuery(MEDIA_KEYS.tablet);
  const isDesktopScreen = useMediaQuery(MEDIA_KEYS.desktop);
  const updateTodoMutation = useUpdateTodoMutation();
  const deleteTodoMutation = useDeleteTodoMutation();

  const onChangeStatusHandler = () => {
    updateTodoMutation.mutate({
      id,
      title,
      description,
      isCompleted: !isCompleted,
      isPrivate
    });
  };

  const goTodoDetails = () => {
    navigate(`/todo/${id}`, { state: { id, isCompleted, isPrivate } });
  };

  const todoDeleteHandler = () => {
    deleteTodoMutation.mutate(id!);
  };

  return (
    <>
      {isMobileScreen && (
        <MobileLayout
          title={title}
          description={description}
          isCompleted={isCompleted}
          onChangeStatus={onChangeStatusHandler}
          goTodoDetails={goTodoDetails}
          todoDeleteHandler={todoDeleteHandler}
        />
      )}

      {isTabletScreen && (
        <TabletLayout
          title={title}
          description={description}
          isCompleted={isCompleted}
          onChangeStatus={onChangeStatusHandler}
          goTodoDetails={goTodoDetails}
          todoDeleteHandler={todoDeleteHandler}
        />
      )}

      {isDesktopScreen && (
        <DesktopLayout
          id={id!}
          title={title}
          description={description}
          isCompleted={isCompleted}
          onChangeStatus={onChangeStatusHandler}
          goTodoDetails={goTodoDetails}
          todoDeleteHandler={todoDeleteHandler}
        />
      )}
    </>
  );
};
