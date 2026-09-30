import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "AI Todo App",
  description: "AI Todo & Habit Tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
        <Navbar />
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
