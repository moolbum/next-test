import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const App = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          router.push("/tomato");
        }}
      >
        tomato로 이동
      </button>
      <p>이름</p>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "12px" }}
      />
      <button
        type="button"
        onClick={() => {
          router.push(`/vegetable/${name}`);
        }}
      >
        {name}으로 이동
      </button>

      <div>
        <img src="/asset/images/01.jpg" alt="열기구" />
      </div>
    </div>
  );
};

export default App;
