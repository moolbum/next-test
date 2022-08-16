import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { colorMap } from '../../styles/color';

type buttonWidthType = 12 | 24;
type buttonColorType = 'gray' | 'red';
type buttonRadiusType = 'square' | 'round';

interface ButtonProps {
  children: ReactNode;
  width?: buttonWidthType;
  color: buttonColorType;
  radius: buttonRadiusType;
  type: any;
}

const Button = ({ children, type, width, color, radius }: ButtonProps) => {
  return (
    <StyleButton width={width} type={type} color={color} radius={radius}>
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
      buttonColor = colorMap.gray10;
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

const getButtonRadiusType = (radius: buttonRadiusType) => {
  let buttonRadius;

  switch (radius) {
    case 'round':
      buttonRadius = '1000rem';
      break;

    case 'square':
      buttonRadius = '0';
      break;

    default:
      buttonRadius = null;
      break;
  }
  return css`
    border-radius: ${buttonRadius};
  `;
};

const StyleButton = styled.button<{
  width?: buttonWidthType;
  color: buttonColorType;
  radius: buttonRadiusType;
}>`
  ${({ width }) => getButtonWidth(width)}
  ${({ color }) => getButtonColor(color)}
  ${({ radius }) => getButtonRadiusType(radius)}
  padding: 1rem 0;
  border: none;
  cursor: pointer;
  font-weight: 700;
  color: ${colorMap.gray3};
  box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
`;
