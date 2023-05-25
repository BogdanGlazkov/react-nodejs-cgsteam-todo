import styled from 'styled-components';
import { SIZES } from '../../../theme/fonts.const';
import { COLORS } from '../../../theme';

interface ILabelProps {
  htmlFor: string;
}

/// Desktop

export const ModalWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%);
  background-color: ${COLORS.modal};
  width: 50%;
  height: 50vh;
  box-shadow: 0 2px 4px ${COLORS.black};
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
`;

export const ModalLabel = styled.label<ILabelProps>`
  width: 30%;
  font-size: ${SIZES.m};
`;

export const ModalFormElementWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

/// Mobile

export const ModalWrapperMobile = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  background-color: ${COLORS.white};
  width: 85%;
  height: 50vh;
  overflow-y: auto;
  box-shadow: 0 2px 4px ${COLORS.black};
  z-index: 9;
`;

export const ModalFormElementWrapperMobile = styled.div`
  margin-bottom: 20px;
  justify-content: center;
`;

export const ModalLabelMobile = styled.label<ILabelProps>`
  font-size: ${SIZES.m};
  width: 30%;
`;

/// Tablet

export const ModalFormElementWrapperTablet = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ModalLabelTablet = styled.div<ILabelProps>`
  display: flex;
  flex-wrap: nowrap;
  width: 20%;
  font-size: ${SIZES.m};
  margin-right: 10px;
`;
