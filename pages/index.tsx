import React, { useState } from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import styled from 'styled-components';
import { typoMap } from '../src/styles/typo';
import Button from '../src/components/Button';

const TITLE = 'Github 계정검색';

const App: NextPage = () => {
  const [userName, setUserName] = useState('');

  return (
    <FormContainer>
      <h1>{TITLE}</h1>
      <input
        type="text"
        value={userName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUserName(e.target.value)
        }
      />
      <p>{userName}</p>
      <p>깃허브 검색하기</p>

      <Link href={`/users/${userName}`}>
        <a>
          <Button type="submit" color="gray">
            검색하기
          </Button>
        </a>
      </Link>
    </FormContainer>
  );
};

export default App;

const FormContainer = styled.form`
  width: 30rem;
  padding: 7rem 3rem;
  box-shadow: 0.7rem 0.7rem 1.2rem 0.1rem rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  > h1 {
    ${typoMap.h1};
    margin-bottom: 1rem;
  }

  > input {
    ${typoMap.b4};
    padding: 0.3rem 0;
  }

  > p {
    ${typoMap.h4};
    text-align: center;
  }

  label {
    ${typoMap.h2};
  }
`;
