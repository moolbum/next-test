import fetch from "isomorphic-unfetch";
import { GetServerSideProps, NextPage } from "next";

const name = ({ user }: any) => {
  console.log(user);
  const userName = user && user.name;

  return <div>{userName}</div>;
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
