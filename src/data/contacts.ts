import { File, Github, Linkedin, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type ContactLink = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
};

export const contacts: ContactLink[] = [
  { icon: Mail, label: 'Email', value: 'koktimming@gmail.com', href: 'mailto:koktimming@gmail.com' },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/koktimming',
    href: 'https://linkedin.com/in/koktimming',
  },
  { icon: Github, label: 'GitHub', value: 'github.com/tim-ming', href: 'https://github.com/tim-ming' },
  { icon: File, label: 'Resume', value: 'View Resume', href: '/resume.pdf' },
];
