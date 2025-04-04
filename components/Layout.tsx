import { ReactNode } from 'react';
import Link from 'next/link';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow px-6 py-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Rushikesh Dhumal</h1>
          <div className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/projects" className="hover:underline">Projects</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <Link href="/resume" className="hover:underline">Resume</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow px-6 py-8">{children}</main>
      <footer className="text-center py-6 bg-gray-100 dark:bg-gray-800">
        <p>© {new Date().getFullYear()} Rushikesh Dhumal. All rights reserved.</p>
      </footer>
    </div>
  );
}
