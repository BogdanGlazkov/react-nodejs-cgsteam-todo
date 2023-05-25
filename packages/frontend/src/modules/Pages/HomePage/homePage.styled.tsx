import styled from 'styled-components';
import { COLORS } from '../../theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  min-height: 100vh;
  background-color: ${COLORS.main};
`;
