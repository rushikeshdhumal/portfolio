export function ProjectCard({ title, description, github, demo, tags }: any) {
  return (
    <div className="rounded-2xl shadow-md border p-4 hover:shadow-lg transition duration-300 bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags?.map((tag: string, i: number) => (
          <span key={i} className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <a href={github} target="_blank" className="text-blue-500 hover:underline mr-4">GitHub</a>
      <a href={demo} target="_blank" className="text-blue-500 hover:underline">Live Demo</a>
    </div>
  );
}
