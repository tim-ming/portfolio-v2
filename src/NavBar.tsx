export default function NavBar() {
  type NavItem = {
    label: string;
    href: string;
  };

  const navItems: NavItem[] = [
    { label: 'Home', href: '#' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Connect', href: '#connect' },
  ];
  return (
    <nav aria-label="Primary" className={`z-50 flex w-full items-center justify-center`}>
      <ul className="flex flex-1 flex-col font-mono text-sm">
        {navItems.map((item) => (
          <li className="flex" key={item.href}>
            <a
              href={item.href}
              aria-current={window.location.hash === item.href ? 'page' : undefined}
              className={`group focus-outline -ml-1 overflow-hidden rounded-full p-1 transition-colors duration-300 ease-out hover:text-white focus-visible:text-white`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
