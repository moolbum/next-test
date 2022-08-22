import React from 'react';
import styled from 'styled-components';

const Error = () => {
  return (
    <>
      <ErrorText>에러가 발생했습니다.</ErrorText>
    </>
  );
};

export default Error;

const ErrorText = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-weight: 700;
`;
