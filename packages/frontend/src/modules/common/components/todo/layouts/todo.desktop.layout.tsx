import React from 'react';
import { Button, Switch } from '@mui/material';
import { TodoActionsStyled, TodoStyled } from '../todo.styled';

interface DesktopLayoutProps {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  onChangeStatus: () => void;
  goTodoDetails: () => void;
  todoDeleteHandler: () => void;
}

const DesktopLayout = ({
  id,
  title,
  description,
  isCompleted,
  onChangeStatus,
  goTodoDetails,
  todoDeleteHandler
}: DesktopLayoutProps) => (
  <tr>
    <TodoStyled isCompleted={isCompleted}>{id}</TodoStyled>
    <TodoStyled isCompleted={isCompleted}>{title}</TodoStyled>
    <TodoStyled isCompleted={isCompleted}>{description}</TodoStyled>
    <TodoActionsStyled>
      <Switch checked={isCompleted} onChange={onChangeStatus} />
      <Button color="secondary" onClick={goTodoDetails}>
        VIEW
      </Button>
      <Button color="error" type="button" onClick={todoDeleteHandler}>
        DELETE
      </Button>
    </TodoActionsStyled>
  </tr>
);

export default DesktopLayout;
