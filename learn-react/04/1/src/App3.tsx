import Button from "./components/html/Button";
import Input from "./components/html/Input";

export default function App3() {
  return (
    <>
      <div className="item-middle">
        <Button type="button" disabled={true} className="bg-[#4f4f4f]">
          Add
        </Button>
        <Button type="submit" disabled={false} className="bg-[#ed4848]">
          Cancel
        </Button>
        <Button type="reset" disabled={false} className="bg-[#7d48ed]">
          Success
        </Button>
        <Input type="text" className="input-style" />
        <Input type="text" className="input-style" />
        <Input className="input-style" disabled />
      </div>
    </>
  );
}
