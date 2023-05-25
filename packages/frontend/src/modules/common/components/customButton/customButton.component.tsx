import React, { FunctionComponent } from 'react';
import * as Styled from './customButton.styled';

interface IProps {
  title: string;
  func?: () => void;
}

export const CustomButtonComponent: FunctionComponent<IProps> = ({ title, func }) => (
  <Styled.CustomButton
    backgroundColor="transparent"
    fontSize={20}
    width={200}
    height={50}
    onClick={func}
  >
    {title}
  </Styled.CustomButton>
);
