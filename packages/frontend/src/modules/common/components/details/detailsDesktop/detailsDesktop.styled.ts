import styled from 'styled-components';
import { SIZES } from '../../../../theme/fonts.const';

export const DetailsPageFormWrapper = styled.div`
  padding: 50px 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export const DetailsPageFormTitle = styled.div`
  font-size: ${SIZES.l};
  margin-bottom: 5%;
  display: flex;
  flex-wrap: wrap;
`;

export const DetailsPageFormDescription = styled.div`
  font-size: ${SIZES.m};
  margin-bottom: 5%;
`;

export const DetailsPageFormSwitchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
