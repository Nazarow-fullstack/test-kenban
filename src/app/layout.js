import "./globals.css";

export const metadata = {
  title: "Vibe Kanban",
  description: "A modern, collaborative Kanban board for efficient project management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
