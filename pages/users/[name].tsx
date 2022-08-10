import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import { GetServerSideProps, NextPage } from "next";

const name = ({ user }: any) => {
  const router = useRouter();
  const userName = user && user.name;

  return (
    <div>
      <div>{userName}</div>
      <button
        type="button"
        onClick={() => {
          router.push("/");
        }}
      >
        go To Home
      </button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { name } = query;
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    const user = await res.json();
    return { props: { user } };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};

export default name;
