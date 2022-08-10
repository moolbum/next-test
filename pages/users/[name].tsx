import { useRouter } from "next/router";
import axios from "axios";

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
