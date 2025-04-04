export default function Resume() {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Resume</h1>
        <a href="/resume.pdf" className="text-blue-600 underline mb-4 block" download>
          Download Resume
        </a>
        <iframe src="/resume.pdf" className="w-full h-[80vh] border rounded" />
      </div>
    );
  }