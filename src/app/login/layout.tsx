export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // interface children {children: React.ReactNode}
  return (
    <>
      <h1> layout in login folder</h1>
      {children}
    </>
  );
}
