import Link from "next/link";

const tomato = () => {
  return (
    <div>
      <h2>Link to 'Main'</h2>
      <Link href="/">
        <a>Move to Main</a>
      </Link>
    </div>
  );
};

export default tomato;
