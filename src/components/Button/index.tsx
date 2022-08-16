import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { colorMap } from '../../styles/color';

type buttonWidthType = 12 | 24;
type buttonColorType = 'gray' | 'red';

interface ButtonProps {
  children: ReactNode;
  width?: buttonWidthType;
  color: buttonColorType;
  type: any;
}

const Button = ({ children, type, width, color }: ButtonProps) => {
  return (
    <StyleButton width={width} type={type} color={color}>
      {children}
    </StyleButton>
  );
};

export default Button;

const getButtonWidth = (width?: buttonWidthType) => {
  let buttonWidth;

  switch (width) {
    case 12:
      buttonWidth = '1.2rem';
      break;

    case 24:
      buttonWidth = '2.4rem';
      break;

    default:
      buttonWidth = '100%';
      break;
  }
  return css`
    width: ${buttonWidth};
  `;
};

const getButtonColor = (color: buttonColorType) => {
  let buttonColor;

  switch (color) {
    case 'gray':
      buttonColor = colorMap.gray7;
      break;

    case 'red':
      buttonColor = colorMap.red1;
      break;

    default:
      buttonColor = colorMap.white;
      break;
  }
  return css`
    background-color: ${buttonColor};
  `;
};

const StyleButton = styled.button<{
  width?: buttonWidthType;
  color: buttonColorType;
}>`
  ${({ width }) => getButtonWidth(width)}
  ${({ color }) => getButtonColor(color)}
  padding: 0.5rem 0;
  border: none;
  cursor: pointer;
  font-weight: 700;
`;
