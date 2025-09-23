import SectionHeader from '../components/SectionHeader';

const contacts = [
  { label: 'Email', value: 'koktimming@gmail.com', href: 'mailto:koktimming@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/koktimming', href: 'https://linkedin.com/in/koktimming' },
  { label: 'GitHub', value: 'github.com/tim-ming', href: 'https://github.com/tim-ming' },
];

export default function ConnectSection() {
  return (
    <section id="connect" data-section>
      <SectionHeader
        title="Connect"
        content="Let's connect! Feel free to reach out about opportunities, projects, or collaborations anytime."
      />
      <dl className="space-y-4">
        {contacts.map((contact) => {
          const isExternal = contact.href.startsWith('http');

          return (
            <div key={contact.label} className="flex flex-col gap-1">
              <dt className="font-mono text-sm">{contact.label}</dt>
              <dd>
                <a
                  href={contact.href}
                  className="focus-outline inline-flex w-fit text-base text-white transition-colors hover:text-gray-200 hover:underline focus-visible:text-gray-200 focus-visible:underline"
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                >
                  {contact.value}
                  {isExternal && <span className="sr-only"> (opens in a new tab)</span>}
                </a>
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
