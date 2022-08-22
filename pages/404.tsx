import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <>
      <NotFoundText>404 페이지입니다.</NotFoundText>
    </>
  );
};

export default NotFound;

const NotFoundText = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-weight: 700;
`;
