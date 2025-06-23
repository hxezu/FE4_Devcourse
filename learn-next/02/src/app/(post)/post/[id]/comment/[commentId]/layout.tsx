export async function generateMetadata({
  params,
}: {
  params: Promise<{ commentId: string }>;
}) {
  const { commentId } = await params;
  return {
    title: `commentId - ${commentId}`,
  };
}

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>Comment Header</h1>
      {children}
      <footer>Comment footer</footer>
    </>
  );
}
