import styled from 'styled-components';
import { COLORS } from '../../../theme';
import { SIZES } from '../../../theme/fonts.const';

interface IProps {
  isCompleted?: boolean;
}
export const TodoStyled = styled.td<IProps>`
  border: solid ${COLORS.black} 1px;
  background-color: ${(props) => (props.isCompleted ? COLORS.green : COLORS.red)};
  text-align: center;
`;

export const TodoActionsStyled = styled.td`
  border: solid ${COLORS.black} 1px;
  display: flex;
  justify-content: center;
`;

/// Mobile
export const TodoMobileStyled = styled.div`
  box-shadow: 0 2px 4px ${COLORS.black};
  margin-bottom: 10px;
  padding: 0 10px;
`;

export const TodoListWrapperMobile = styled.div`
  overflow-y: auto;
  max-height: 640px;
  margin-bottom: 20px;
`;

export const TodoMobileActionsStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export const TodoMobileTitleStyled = styled.div`
  font-size: ${SIZES.l};
`;

export const TodoMobileDescriptionStyled = styled.div`
  font-size: ${SIZES.m};
`;

/// Tablet
export const TodoTabletStyled = styled.div`
  height: 40vh;
  background-color: ${COLORS.modal};
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const TodoListWrapperTablet = styled.div`
  width: 50%;
`;

export const TodoTabletTitleStyled = styled.div`
  font-size: ${SIZES.l};
  margin-bottom: 20px;
`;

export const TodoTabletDescriptionStyled = styled.div`
  font-size: ${SIZES.m};
`;

export const TodoTabletActionsStyled = styled.div`
  display: flex;
  justify-content: center;
`;
