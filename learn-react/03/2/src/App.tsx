import Child from "./components/Child";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

export default function App() {
  const myFunction = () => {
    console.log("Clicked!");
  };

  return (
    <>
      <Child
        message="Hello World!"
        number={42}
        fruit={["Apple", "Banana", "Cherry"]}
        person={{ name: "Alice", age: 20 }}
        isLoggedIn={true}
        myFunction={myFunction}
        name="현혜주"
        value={["a", "b", "c"]}
        style={{ size: "50px", color: "red" }}
        header={<Header />}
        content={<Content />}
        footer={<Footer />}
      />
    </>
  );
}
