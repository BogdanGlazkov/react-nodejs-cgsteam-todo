import React, { FunctionComponent } from 'react';
import * as Styled from './customTitle.styled';

interface IProps {
  title: string;
}

export const CustomTitleComponent: FunctionComponent<IProps> = ({ title }) => (
  <Styled.CustomTitle>{title}</Styled.CustomTitle>
);
