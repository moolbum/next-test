import { css } from 'styled-components';

type DisplayTypoType = 'd1' | 'd2' | 'd3';
type HeadingTypoType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'h7'
  | 'h8'
  | 'h9'
  | 'h10'
  | 'h11'
  | 'h12';
type BodyTypoType =
  | 'b1'
  | 'b2'
  | 'b3'
  | 'b4'
  | 'b5'
  | 'b6'
  | 'b7'
  | 'b8'
  | 'b9';
type ButtonTypoType = 'btn1' | 'btn2' | 'btn3' | 'btn4' | 'btn5' | 'btn6';
type InputTypoType = 'ipt1' | 'ipt2' | 'ipt3' | 'ipt4';
type LabelTypoType = 'lb1' | 'lb2' | 'lb3' | 'lb4';

const getDisplayTypo = (size: DisplayTypoType) => {
  const fontWeight = '700';
  let fontSize, lineHeight;

  switch (size) {
    case 'd1':
      fontSize = '4.8rem';
      lineHeight = '6.7rem';
      break;

    case 'd2':
      fontSize = '4rem';
      lineHeight = '5.6rem';
      break;

    case 'd3':
      fontSize = '3.2rem';
      lineHeight = '4.5rem';
      break;

    default:
  }
  return css`
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    line-height: ${lineHeight};
  `;
};

const getHeadingTypo = (size: HeadingTypoType) => {
  const fontWeight = '700';
  let fontSize;
  let lineHeight: string | number = 1.5;

  switch (size) {
    case 'h1':
      fontSize = '2.8rem';
      lineHeight = '4.2rem';
      break;

    case 'h2':
      fontSize = '2.4rem';
      lineHeight = '3.6rem';
      break;

    case 'h3':
      fontSize = '2.2rem';
      lineHeight = '3.3rem';
      break;

    case 'h4':
      fontSize = '2rem';
      lineHeight = '3rem';
      break;

    case 'h5':
      fontSize = '1.8rem';
      lineHeight = '2.7rem';
      break;

    case 'h6':
      fontSize = '1.6rem';
      lineHeight = '2.4rem';
      break;

    case 'h7':
      fontSize = '1.5rem';
      lineHeight = '2.4rem';
      break;

    case 'h8':
      fontSize = '1.4rem';
      lineHeight = '2rem';
      break;

    case 'h9':
      fontSize = '1.3rem';
      lineHeight = '1.9rem';
      break;

    case 'h10':
      fontSize = '1.2rem';
      lineHeight = '1.8rem';
      break;

    case 'h11':
      fontSize = '1.1rem';
      lineHeight = '1.6rem';
      break;

    case 'h12':
      fontSize = '1rem';
      lineHeight = '1.4rem';
      break;

    default:
  }
  return css`
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    line-height: ${lineHeight};
  `;
};

const getBodyTypo = (size: BodyTypoType) => {
  const fontWeight = '400';
  let fontSize;
  let lineHeight: string | number = 1.5;

  switch (size) {
    case 'b1':
      fontSize = '2rem';
      break;
    case 'b2':
      fontSize = '1.8em';
      break;
    case 'b3':
      fontSize = '1.6rem';
      break;
    case 'b4':
      fontSize = '1.5rem';
      lineHeight = '2.2rem';
      break;
    case 'b5':
      fontSize = '1.4rem';
      lineHeight = '2rem';
      break;
    case 'b6':
      fontSize = '1.3rem';
      lineHeight = '1.9rem';
      break;
    case 'b7':
      fontSize = '1.2rem';
      break;
    case 'b8':
      fontSize = '1.1rem';
      lineHeight = '1.6rem';
      break;

    case 'b9':
      fontSize = '1rem';
      lineHeight = '1.4rem';
      break;

    default:
      fontSize = '1rem';
  }

  return css`
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    line-height: ${lineHeight};
  `;
};

const getButtonTypo = (size: ButtonTypoType) => {
  const fontWeight = '500';
  let fontSize;
  let lineHeight;

  switch (size) {
    case 'btn1':
      fontSize = '1.8rem';
      lineHeight = '2.6rem';
      break;

    case 'btn2':
      fontSize = '1.6rem';
      lineHeight = '2.4rem';
      break;

    case 'btn3':
      fontSize = '1.5rem';
      lineHeight = '2.2rem';
      break;

    case 'btn4':
      fontSize = '1.4rem';
      lineHeight = '2rem';
      break;

    case 'btn5':
      fontSize = '1.2rem';
      lineHeight = '1.8rem';
      break;

    case 'btn6':
      fontSize = '1rem';
      lineHeight = '1.4rem';
      break;

    default:
  }

  return css`
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    line-height: ${lineHeight};
  `;
};

const getInputTypo = (size: InputTypoType) => {
  const fontWeight = '400';
  let fontSize;
  let lineHeight;

  switch (size) {
    case 'ipt1':
      fontSize = '1.8rem';
      lineHeight = '2.6rem';
      break;

    case 'ipt2':
      fontSize = '1.6rem';
      lineHeight = '2.2rem';
      break;

    case 'ipt3':
      fontSize = '1.4rem';
      lineHeight = '2rem';
      break;

    case 'ipt4':
      fontSize = '1.2rem';
      lineHeight = '1.8rem';
      break;

    default:
  }

  return css`
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    line-height: ${lineHeight};
  `;
};

const getLabelTypo = (size: LabelTypoType) => {
  const fontWeight = '400';
  let fontSize;
  let lineHeight;

  switch (size) {
    case 'lb1':
      fontSize = '1.4rem';
      lineHeight = '1.4rem';
      break;

    case 'lb2':
      fontSize = '1.2rem';
      lineHeight = '1.2rem';
      break;

    case 'lb3':
      fontSize = '1.1rem';
      lineHeight = '1.1rem';
      break;

    case 'lb4':
      fontSize = '1rem';
      lineHeight = '1rem';
      break;

    default:
      return;
  }

  return css`
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    line-height: ${lineHeight};
  `;
};

/** mix All Typo */

export const typoMap = {
  /** Display */
  d1: getDisplayTypo('d1'),
  d2: getDisplayTypo('d2'),
  d3: getDisplayTypo('d3'),

  /** Headings */
  h1: getHeadingTypo('h1'),
  h2: getHeadingTypo('h2'),
  h3: getHeadingTypo('h3'),
  h4: getHeadingTypo('h4'),
  h5: getHeadingTypo('h5'),
  h6: getHeadingTypo('h6'),
  h7: getHeadingTypo('h7'),
  h8: getHeadingTypo('h8'),
  h9: getHeadingTypo('h9'),
  h10: getHeadingTypo('h10'),
  h11: getHeadingTypo('h11'),
  h12: getHeadingTypo('h12'),

  /** Bodys */
  b1: getBodyTypo('b1'),
  b2: getBodyTypo('b2'),
  b3: getBodyTypo('b3'),
  b4: getBodyTypo('b4'),
  b5: getBodyTypo('b5'),
  b6: getBodyTypo('b6'),
  b7: getBodyTypo('b7'),
  b8: getBodyTypo('b8'),
  b9: getBodyTypo('b9'),

  /** Buttons */
  btn1: getButtonTypo('btn1'),
  btn2: getButtonTypo('btn2'),
  btn3: getButtonTypo('btn3'),
  btn4: getButtonTypo('btn4'),
  btn5: getButtonTypo('btn5'),
  btn6: getButtonTypo('btn6'),

  /** Inputs */
  ipt1: getInputTypo('ipt1'),
  ipt2: getInputTypo('ipt2'),
  ipt3: getInputTypo('ipt3'),
  ipt4: getInputTypo('ipt4'),

  /** Labels */
  lb1: getLabelTypo('lb1'),
  lb2: getLabelTypo('lb2'),
  lb3: getLabelTypo('lb3'),
  lb4: getLabelTypo('lb4'),
};
