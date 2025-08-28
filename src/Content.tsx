export default function PortfolioLayout() {
  return (
    <main className="min-h-screen relative z-10 text-white font-sans">
      {/* Grid container */}
      <div className="grid grid-cols-12 gap-4 px-8 py-12 max-w-7xl mx-auto">
        {/* Sidebar / Nav */}
        <aside className="col-span-3 flex flex-col justify-between">
          <div className="flex flex-col">
            <span className="mb-2">Tim Ming</span>
            <p>Software Engineer</p>
            <nav className="mt-8 space-y-2 text-sm font-medium">
              <a href="#" className="block hover:underline">
                Work
              </a>
              <a href="#" className="block hover:underline">
                About
              </a>
              <a href="#" className="block hover:underline">
                Contact
              </a>
            </nav>
          </div>
          <footer className="mt-12 text-xs text-gray-500">
            © {new Date().getFullYear()}
          </footer>
        </aside>

        {/* Main Content */}
        <section className="col-span-9">
          {/* Hero */}
          <header className="mb-24">
            <h2 className="text-6xl md:text-8xl font-bold uppercase leading-tight">
              Design. Code. Minimal.
            </h2>
            <p className="mt-6 text-lg max-w-prose text-gray-600">
              I'm a developer/designer focused on clean, functional experiences
              with a Swiss-inspired approach.
            </p>
          </header>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-t pt-4">
              <h3 className="text-xl font-semibold">Project Title</h3>
              <p className="text-gray-600 mt-2">
                Short description of the project.
              </p>
            </div>
            <div className="border-t pt-4">
              <h3 className="text-xl font-semibold">Another Project</h3>
              <p className="text-gray-600 mt-2">
                Short description of the project.
              </p>
            </div>
            {/* Add more project blocks */}
          </div>
        </section>
      </div>
    </main>
  );
}
