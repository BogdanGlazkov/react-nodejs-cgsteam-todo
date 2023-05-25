import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomTitleComponent } from '../../common/components/customTitle';
import { CustomButtonComponent } from '../../common/components/customButton';
import * as Styled from './homePage.styled';

export const HomePage = () => {
  const navigate = useNavigate();

  const goToTodos = () => {
    navigate('/todos');
  };
  return (
    <Styled.Wrapper>
      <CustomTitleComponent title="Todo App" />
      <CustomButtonComponent title="Log In" />
      <CustomButtonComponent title="Register" />
      <CustomButtonComponent title="Go to TODOS" func={goToTodos} />
    </Styled.Wrapper>
  );
};
