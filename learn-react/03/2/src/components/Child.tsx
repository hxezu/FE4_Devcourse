export default function Child(props: {
  message: string;
  number: number;
  fruit: string[];
  person: { name: string; age: number };
  isLoggedIn: boolean;
  myFunction: () => void;
  name?: string;
  value: string | number | string[];
  style: { size: string; color: string };
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <>
      <div>{props.header}</div>
      <div>{props.content}</div>
      <h1>{props.message}</h1>
      <h1>{props.number}</h1>
      <h1>{JSON.stringify(props.fruit, null)}</h1>
      <h1>{JSON.stringify(props.person, null, 2)}</h1>
      <h1>{props.isLoggedIn ? "로그인됨" : "로그인 안됨"}</h1>
      <button onClick={props.myFunction}>Click</button>
      <h1>{props.name?.length ? props.name : "홍길동"}</h1>
      <h1>
        {Array.isArray(props.value)
          ? JSON.stringify(props.value, null)
          : props.value}
      </h1>
      <div style={{ fontSize: props.style.size, color: props.style.color }}>
        스타일 적용
      </div>
      <div>{props.footer}</div>
    </>
  );
}
