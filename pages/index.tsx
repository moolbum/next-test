import React, { useState } from "react";
import Link from "next/link";
import { NextPage } from "next";

const App: NextPage = () => {
  const [userName, setUserName] = useState("");
  return (
    <form>
      <label>userName</label>
      <input
        type="text"
        value={userName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUserName(e.target.value)
        }
      />
      <p>{userName} 깃허브 검색하기</p>
      <Link href={`/users/${userName}`}>
        <a>
          <button type="submit">검색하기</button>
        </a>
      </Link>
    </form>
  );
};

export default App;
