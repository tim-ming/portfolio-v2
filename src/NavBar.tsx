export type NavItem = {
  label: string;
  href: string;
};

type NavBarProps = {
  items: NavItem[];
  className?: string;
};

export default function NavBar({ items, className = '' }: NavBarProps) {
  return (
    <nav
      aria-label="Primary"
      className={`sticky top-4 z-50 mx-auto flex w-full max-w-2xl items-center justify-center rounded-full border border-white/15 bg-black/20 px-5 py-2 text-sm font-medium text-gray-400 backdrop-blur-sm transition-colors ${className}`.trim()}
    >
      <ul className="flex flex-1 items-center justify-center gap-4 font-mono tracking-[0.2em]">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="group focus-outline relative overflow-hidden rounded-full px-4 py-2 text-gray-300 transition-colors duration-300 ease-out hover:text-white focus-visible:text-white"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-visible:opacity-100"
              />
              <span className="relative">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
