import fetch from "isomorphic-unfetch";
import { GetStaticPaths, GetStaticProps } from "next";

const name = ({ user, time }: { user: any; time: string }) => {
  const userName = user && user.name;
  return (
    <div>
      {userName}
      {time}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const res = await fetch(
      `http://api.github.com/users/${params && params.name}`
    );
    if (res.status === 200) {
      const user = await res.json();
      return { props: { user, time: new Date().toISOString() }, revalidate: 3 };
    }
    return { props: { time: new Date().toISOString() }, revalidate: 3 };
  } catch (err) {
    console.log(err);
    return { props: { time: new Date().toISOString(), revalidate: 3 } };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { name: "jerrynim" } }],
    fallback: true,
  };
};

export default name;
