import styled from 'styled-components';
import { COLORS } from '../../../../theme';
import { SIZES } from '../../../../theme/fonts.const';

export const DetailsPageFormWrapperTablet = styled.div`
  font-size: ${SIZES.l};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  border: 1px solid ${COLORS.black};
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
