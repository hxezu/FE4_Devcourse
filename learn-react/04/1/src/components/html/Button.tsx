import { twMerge } from "tailwind-merge";
type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  className?: "bg-[#ed4848]" | "bg-[#7d48ed]" | "bg-[#4f4f4f]";
};

export default function Button(props: ButtonProps) {
  const { className, children, ...rest } = props;
  return (
    <>
      <button
        className={twMerge(
          "w-[77px] h-[44px] text-sm text-white rounded-lg cursor-pointer disabled:cursor-not-allowed",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
