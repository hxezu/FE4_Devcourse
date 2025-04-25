import { useCountStore } from "../stores/countStores";

export default function CountButton() {
  const decrement = useCountStore((state) => state.decrement);
  const reset = useCountStore((state) => state.reset);
  const increment = useCountStore((state) => state.increment);
  return (
    <>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>0</button>
      <button onClick={increment}>+</button>
    </>
  );
}
