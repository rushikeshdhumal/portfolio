export default function Contact() {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Contact</h1>
        <p>Email: <a href="mailto:you@example.com" className="text-blue-600 underline">you@example.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-600 underline" target="_blank">yourprofile</a></p>
        <p>GitHub: <a href="https://github.com/yourusername" className="text-blue-600 underline" target="_blank">@yourusername</a></p>
      </div>
    );
  }