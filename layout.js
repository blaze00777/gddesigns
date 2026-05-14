export const metadata = {
  title: 'Design Portfolio',
  description: 'Creative Design Services - Portfolio & Gallery',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body style={{ margin: 0, padding: 0, background: '#0a0a0a' }}>
        {children}
      </body>
    </html>
  );
}
