import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { Form, Formik } from 'formik';
import { ITodo } from '../../common/types/todo.types';
import todoValidationSchema from '../../common/helpers/todoValidationSchema';
import { MEDIA_KEYS } from '../../common/consts/app-keys.const';
import useTodoQuery from '../../../hooks/useTodoQuery';
import useUpdateTodoMutation from '../../../hooks/useUpdateTodoMutation';
import { DetailsDesktop, DetailsTablet, DetailsMobile } from '../../common/components/details';

export const DetailsPageComponent = () => {
  const location = useLocation();
  const { id, isCompleted, isPrivate } = location.state;
  const navigate = useNavigate();

  const isMobileScreen = useMediaQuery(MEDIA_KEYS.mobile);
  const isTabletScreen = useMediaQuery(MEDIA_KEYS.tablet);
  const isDesktopScreen = useMediaQuery(MEDIA_KEYS.desktop);
  const { data: todo, status: todoStatus, refetch: refetchTodo } = useTodoQuery(id);
  const updateTodoMutation = useUpdateTodoMutation();
  const goBackHandler = () => navigate(-1);

  const initialValues = {
    id,
    title: todo!.title,
    description: todo!.description,
    isCompleted,
    isPrivate
  };

  const saveHandler = async (idTodo: string, values: ITodo) => {
    await updateTodoMutation.mutate(values);
    await refetchTodo();
    goBackHandler();
  };

  const handleSubmit = (values: ITodo) => {
    saveHandler(id, values);
  };

  return todoStatus === 'success' ? (
    <Formik
      initialValues={initialValues}
      validationSchema={todoValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        {isMobileScreen && <DetailsMobile />}

        {isTabletScreen && <DetailsTablet />}

        {isDesktopScreen && <DetailsDesktop />}
      </Form>
    </Formik>
  ) : null;
};
