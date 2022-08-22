import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';
import { IoLogoGithub } from 'react-icons/io';
import { useRouter } from 'next/router';
import {
  GIT_PULLS,
  GIT_ISSUES,
  GIT_EXPLORE,
  GIT_MARKET_PLACE,
} from '../../constant/urls';

const PULL_REQUEST = 'Pull request';
const ISSUES = 'Issues';
const MARKET_PLACE = 'Marketplace';
const EXPLORE = 'Explore';

const Header = () => {
  const router = useRouter();
  const [userName, setUserName] = useState('');

  const handleSubmitClick = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/users/${userName}`);
  };

  return (
    <header>
      <HeaderWrap>
        <IoLogoGithub
          color="white"
          size={36}
          onClick={() => {
            router.push('/');
          }}
        />
        <form onSubmit={handleSubmitClick}>
          <input
            value={userName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserName(e.target.value)
            }
          />
        </form>

        <Nav>
          <a href={GIT_PULLS}>{PULL_REQUEST}</a>
          <a href={GIT_ISSUES}>{ISSUES}</a>
          <a href={GIT_MARKET_PLACE}>{MARKET_PLACE}</a>
          <a href={GIT_EXPLORE}>{EXPLORE}</a>
        </Nav>
      </HeaderWrap>
    </header>
  );
};

export default Header;

const HeaderWrap = styled.article`
  display: flex;
  align-items: center;
  padding: 1.4rem;
  background: #24292e;
  line-height: 0;

  > form {
    > input {
      width: 30rem;
      height: 2.8rem;
      margin: 0 1.6rem;
      padding: 0 1.2rem;
      border-radius: 0.5rem;
      border: none;
      background: hsla(0, 0%, 100%, 0.125);
      color: #fff;
      font-size: 1.4rem;
      font-weight: 700;
    }
  }
`;

const Nav = styled.nav`
  a {
    margin-right: 1.6rem;
    color: #fff;
    font-size: 1.4rem;
    font-weight: 700;
    text-decoration: none;
  }
`;
