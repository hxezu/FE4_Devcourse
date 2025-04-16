import { Title, Wrapper, Button } from "./css/card";
export default function App() {
  return (
    <>
      <Wrapper>
        <Title>Hello World!</Title>
        <Button>OFF</Button>
        <Button on>ON</Button>
      </Wrapper>
    </>
  );
}
