import SectionHeader from '../components/SectionHeader';
import { ArrowUpRight } from 'lucide-react';
import { contacts } from '../data/contacts';

export default function ConnectSection() {
  return (
    <section id="connect">
      <SectionHeader
        title="Connect"
        content="Let's connect! Feel free to reach out about opportunities, projects, or collaborations anytime."
      />
      <dl className="space-y-4">
        {contacts.map((contact) => {
          const isExternal = contact.href.startsWith('http') || contact.href.startsWith('/');

          return (
            <div key={contact.label} className="flex flex-col gap-1">
              <dt className="flex items-center gap-2 font-mono text-sm text-gray-400">
                <contact.icon className="h-4 w-4" />
                {contact.label}
              </dt>
              <dd className="flex">
                <a
                  href={contact.href}
                  className="focus-outline flex items-center gap-1 text-base text-gray-300 transition-colors hover:text-blue-200 hover:underline focus-visible:text-blue-200 focus-visible:underline"
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                >
                  {contact.value}
                  {isExternal && <span className="sr-only"> (opens in a new tab)</span>}
                  {contact.label === 'Resume' && <ArrowUpRight className="h-4 w-4" />}
                </a>
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
