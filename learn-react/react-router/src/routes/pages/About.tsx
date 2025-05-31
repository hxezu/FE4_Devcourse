import React from "react";
import { useLoaderData } from "react-router";

export default function About() {
  const posts = useLoaderData();
  return (
    <>
      <div>About</div>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
