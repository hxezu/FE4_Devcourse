import React, { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then(setPosts);
  }, []);
  return (
    <>
      <div>Home</div>;<pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
