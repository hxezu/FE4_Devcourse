import React from "react";
import { useLoaderData } from "react-router";

export default function Detail() {
  const post = useLoaderData();
  return (
    <>
      <div>Detail</div>
      <p>{JSON.stringify(post, null, 2)}</p>
      {/* <p>{JSON.stringify(user, null, 2)}</p> */}
    </>
  );
}
