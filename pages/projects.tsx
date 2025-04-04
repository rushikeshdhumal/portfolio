import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-xl p-4 shadow">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mb-2">{project.description}</p>
            <a href={project.github} className="text-blue-600 underline mr-4" target="_blank">GitHub</a>
            <a href={project.demo} className="text-blue-600 underline" target="_blank">Live Demo</a>
          </div>
        ))}
      </div>
    </div>
  );
}