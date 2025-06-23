"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function RegisterClient() {
  const router = useRouter();
  useEffect(() => {
    //router.push("/");
  }, [router]);
  return (
    <>
      <h1>RegisterClient</h1>
      <button onClick={() => router.push("/")}>홈으로</button>
    </>
  );
}
