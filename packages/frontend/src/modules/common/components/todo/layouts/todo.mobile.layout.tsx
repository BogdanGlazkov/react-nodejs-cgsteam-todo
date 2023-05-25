import React from 'react';
import { Button, Switch } from '@mui/material';
import {
  TodoMobileActionsStyled,
  TodoMobileDescriptionStyled,
  TodoMobileStyled,
  TodoMobileTitleStyled
} from '../todo.styled';

interface MobileLayoutProps {
  title: string;
  description: string;
  isCompleted: boolean;
  onChangeStatus: () => void;
  goTodoDetails: () => void;
  todoDeleteHandler: () => void;
}

const MobileLayout = ({
  title,
  description,
  isCompleted,
  onChangeStatus,
  goTodoDetails,
  todoDeleteHandler
}: MobileLayoutProps) => (
  <TodoMobileStyled>
    <TodoMobileTitleStyled>{title}</TodoMobileTitleStyled>
    <TodoMobileDescriptionStyled>{description}</TodoMobileDescriptionStyled>
    <TodoMobileActionsStyled>
      <Button color="secondary" onClick={goTodoDetails}>
        VIEW
      </Button>
      <Button color="error" type="button" onClick={todoDeleteHandler}>
        DELETE
      </Button>
      <Switch checked={isCompleted} onChange={onChangeStatus} />
    </TodoMobileActionsStyled>
  </TodoMobileStyled>
);

export default MobileLayout;
