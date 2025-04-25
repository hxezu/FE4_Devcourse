import { useEffect } from "react";
import CountButton from "./components/CountButton";
import CountDisplay from "./components/CountDisplay";
import { useCountStore } from "./stores/countStores";

export default function App() {
  useEffect(() => {
    const unsubscribe = useCountStore.subscribe(
      (state) => state.count,
      (newCount) => {
        console.log("New Count :", newCount);
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <CountDisplay />
      <CountButton />
    </>
  );
}
