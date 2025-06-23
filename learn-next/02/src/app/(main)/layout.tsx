export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>header</h1>
      {children}
      <h1>footer</h1>
    </>
  );
}
