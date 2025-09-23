import { contacts } from '../data/contacts';

const socialContacts = contacts;

export default function IntroSection() {
  const name = 'Tim Ming';
  const role = 'Software Engineer';
  const summary =
    "Hi! I'm a fresh graduate from Monash University Malaysia. I build full-stack apps and websites, and enjoy keeping up with digital design trends as a hobby.";

  return (
    <header className="mb-12">
      <h1 className="text-2xl leading-tight font-medium text-blue-300">
        <a
          href="https://timming.dev"
          className="focus-outline inline-flex w-fit rounded-sm hover:text-blue-200 focus-visible:text-blue-200"
        >
          {name}
        </a>
      </h1>
      <p className="mb-4 text-2xl leading-tight font-medium text-gray-300">{role}</p>
      <p className="max-w-xl text-base text-gray-400">{summary}</p>
      <ul className="mt-6 flex items-center gap-4">
        {socialContacts.map((contact) => {
          const isExternal = contact.href.startsWith('http') || contact.href.startsWith('/');

          return (
            <li key={contact.label}>
              <a
                href={contact.href}
                className="focus-outline inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-colors hover:bg-white/10 hover:text-blue-300 focus-visible:text-blue-300"
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer noopener' : undefined}
                aria-label={contact.label}
              >
                <contact.icon className="h-5 w-5" aria-hidden />
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
