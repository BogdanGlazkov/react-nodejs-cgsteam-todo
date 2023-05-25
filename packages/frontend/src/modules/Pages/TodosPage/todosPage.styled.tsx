import styled from 'styled-components';
import { COLORS } from '../../theme';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${COLORS.main};
`;

export const TodosList = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

export const TodosTable = styled.table`
  margin: auto auto 30px;
  width: 100%;
`;

/// Mobile

export const TodosPageMobile = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.main};
`;

/// Tablet
export const TodosPageTablet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
