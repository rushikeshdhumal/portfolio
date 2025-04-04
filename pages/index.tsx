import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-6">
      <Head>
        <title>My Data Science Portfolio</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Hi, I'm [Your Name]</h1>
      <p className="text-lg mb-6">
        I'm a data scientist who loves building ML models, visualizations, and solving real-world problems.
      </p>
      <div className="space-x-4">
        <Link href="/projects" className="underline text-blue-600">Projects</Link>
        <Link href="/blog" className="underline text-blue-600">Blog</Link>
        <Link href="/resume" className="underline text-blue-600">Resume</Link>
        <Link href="/contact" className="underline text-blue-600">Contact</Link>
      </div>
    </div>
  );
}