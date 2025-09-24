export default function FooterSection() {
  return (
    <footer className="flex items-center justify-between py-12 text-sm text-gray-400">
      <span>© {new Date().getFullYear()} Tim Ming</span>
      <a href="#" className="text-gray-400 transition-colors hover:text-gray-300">
        Back to Top ↑
      </a>
    </footer>
  );
}
