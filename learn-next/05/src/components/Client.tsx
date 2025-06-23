"use client";
import { useEffect, useState } from "react";

export default function Client() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <>
      <h1>Client</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
