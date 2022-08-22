import { useRouter } from 'next/router';
import axios from 'axios';
import Head from 'next/head';
import styled from 'styled-components';
import { typoMap } from '../../src/styles/typo';
import Button from '../../src/components/Button';

const name = ({ user }: any) => {
  const router = useRouter();
  const userName = user && user.name;

  return (
    <>
      <Head>
        <title>{router.query.name}</title>
      </Head>

      {user ? (
        <>
          <ProfileContainer>
            <ImageWrapper>
              <img src={user.avatar_url} alt={`${user.name} 프로필이미지`} />
            </ImageWrapper>

            <ProfileWrapper>
              <h2 className="profile-user-username">{userName}</h2>
              <p className="profile-user-login">{user.login}</p>
              <p className="profile-user-bio">{user.bio}</p>
            </ProfileWrapper>

            <button
              type="button"
              onClick={() => {
                router.push('/');
              }}
            >
              go To Home
            </button>
          </ProfileContainer>
        </>
      ) : (
        <NothingUser>
          <h1>일치하는 유저가 없습니다</h1>
          <Button
            radius="round"
            color="gray"
            type="button"
            onClick={() => router.push('/')}
          >
            돌아가기
          </Button>
        </NothingUser>
      )}
    </>
  );
};

export const getServerSideProps = async ({
  query,
}: {
  query: { name: string };
}) => {
  const { name } = query;
  try {
    const res = await axios(`https://api.github.com/users/${name}`);
    if (res.status === 200) {
      const user = await res.data;
      return { props: { user } };
    }
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};

export default name;

const NothingUser = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  > h1 {
    ${typoMap.h1};
    margin-bottom: 1rem;
  }
`;

const ProfileContainer = styled.article`
  width: 25%;
  max-width: 27rem;
  margin-right: 2.6rem;
`;

const ImageWrapper = styled.section`
  width: 100%;
  border: 1px solid #e1e428;

  img {
    display: block;
    width: 100%;
  }
`;

const ProfileWrapper = styled.section`
  .profile-user-username {
    margin: 0;
    padding-top: 1.6rem;
    font-size: 2.6rem;
  }

  .profile-user-login {
    margin: 0;
    font-size: 2rem;
  }

  .profile-user-bio {
    margin: 0;
    font-size: 1.4rem;
  }
`;
