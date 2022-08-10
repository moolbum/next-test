import { GetStaticProps } from "next";

const StaticPage = ({ time }: { time: string }) => {
  return (
    <div>
      <p>{time}</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { time: new Date().toISOString() } };
};

export default StaticPage;
