import { twMerge } from "tailwind-merge";

type OnlyLiterals<T> = T extends string
  ? string extends T
    ? never
    : T
  : never;

type ReactInputType = OnlyLiterals<
  React.InputHTMLAttributes<HTMLInputElement>["type"]
>;
//type ReactInputType = React.InputHTMLAttributes<HTMLInputElement>["type"];

// type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
//   type?: "text" | "number" | "tel" | "password";
// };
type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type?: Exclude<ReactInputType, "radio" | "checkbox" | "range">;
};
//type InputProps = React.ComponentPropsWithoutRef<"input">;

export default function Input(props: InputProps) {
  const { className, ...rest } = props;
  return (
    <>
      <input className={twMerge("w-[240px] h-[44px]", className)} {...rest} />
    </>
  );
}
