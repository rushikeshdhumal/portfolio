import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul className="list-disc ml-6">
        {blogPosts.map((post, idx) => (
          <li key={idx} className="mb-2">
            <a href={post.link} className="text-blue-600 underline" target="_blank">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}