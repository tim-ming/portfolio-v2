export type NavItem = {
  label: string;
  href: string;
};

type NavBarProps = {
  items: NavItem[];
  className?: string;
  activeHref?: string;
};

export default function NavBar({ items, className = '', activeHref }: NavBarProps) {
  return (
    <nav
      aria-label="Primary"
      className={`z-50 flex w-full items-center justify-center rounded-full border border-white/15 bg-black/20 px-5 py-2 text-sm font-medium text-gray-400 backdrop-blur-sm transition-colors ${className}`.trim()}
    >
      <ul className="flex flex-1 items-center justify-center gap-4 font-mono tracking-[0.2em]">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              aria-current={activeHref === item.href ? 'page' : undefined}
              className={`group focus-outline relative overflow-hidden rounded-full px-4 py-2 transition-colors duration-300 ease-out hover:text-white focus-visible:text-white ${
                activeHref === item.href ? 'text-white' : 'text-gray-300'
              }`}
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 rounded-full bg-white/10 transition-opacity duration-300 ease-out ${
                  activeHref === item.href
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100'
                }`}
              />
              <span className="relative">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
