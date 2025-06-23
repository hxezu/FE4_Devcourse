export default async function page({
  params,
}: {
  params: Promise<{ app: string }>;
}) {
  const { app } = await params;
  return (
    <>
      <h1>{app}</h1>
    </>
  );
}
