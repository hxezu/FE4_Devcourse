export default function Button({
  type,
  children,
}: {
  type: "submit" | "reset" | "button";
  children: React.ReactNode;
}) {
  return (
    <>
      {/* 콘텐츠가 있는 문법 */}
      <button type={type}>{children}</button>
    </>
  );
}
