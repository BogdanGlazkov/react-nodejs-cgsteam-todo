import React from 'react';
import { Button, Switch } from '@mui/material';
import {
  TodoTabletActionsStyled,
  TodoTabletDescriptionStyled,
  TodoTabletStyled,
  TodoTabletTitleStyled
} from '../todo.styled';

interface TabletLayoutProps {
  title: string;
  description: string;
  isCompleted: boolean;
  onChangeStatus: () => void;
  goTodoDetails: () => void;
  todoDeleteHandler: () => void;
}

const TabletLayout = ({
  title,
  description,
  isCompleted,
  onChangeStatus,
  goTodoDetails,
  todoDeleteHandler
}: TabletLayoutProps) => (
  <TodoTabletStyled>
    <div>
      <TodoTabletTitleStyled>{title}</TodoTabletTitleStyled>
      <TodoTabletDescriptionStyled>{description}</TodoTabletDescriptionStyled>
    </div>
    <TodoTabletActionsStyled>
      <Button color="secondary" onClick={goTodoDetails}>
        VIEW
      </Button>
      <Button color="error" type="button" onClick={todoDeleteHandler}>
        DELETE
      </Button>
      <Switch checked={isCompleted} onChange={onChangeStatus} />
    </TodoTabletActionsStyled>
  </TodoTabletStyled>
);

export default TabletLayout;
