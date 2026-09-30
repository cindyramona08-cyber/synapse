import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Tasks", href: "/tasks" },
    { name: "Habits & Streaks", href: "/habits" },
    { name: "Calendar", href: "/calendar" },
    { name: "Settings", href: "/settings" },
  ];

  return (
    <nav className="border-b border-zinc-200 dark:border-zinc-800 px-6 py-4 flex items-center justify-between">
      <Link href="/" className="font-bold text-lg">
        AI Todo
      </Link>
      <div className="flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
