import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const education = [
  {
    degree: 'Bachelor of Computer Science (Advanced)',
    institution: 'Monash University',
    specialization: 'Specialization in Advanced Computer Science',
    grade: 'CGPA: 3.88/4.00, WAM: 86.4/100',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Mobile App Development',
      'Databases',
      'Software Architecture and Design',
    ],
    period: 'Feb 2022 — Jul 2025',
    location: 'Subang Jaya, MY',
    institutionLink: 'https://monash.edu.my',
  },
];

export default function EducationSection() {
  return (
    <section id="education">
      <SectionHeader title="Education" />
      <ul className="space-y-10">
        {education.map((item) => {
          const text = `${item.institution} · ${item.location}`;
          const firstBlock = text.split(' ').slice(0, -1).join(' ') + ' ';
          const secondBlock = text.split(' ').slice(-1).join(' ');
          return (
            <li key={item.degree} className="flex flex-col gap-6 text-base text-gray-300">
              <div>
                <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-medium text-white">{item.degree}</span>
                  <span className="font-mono text-sm text-gray-400">{item.period}</span>
                </div>
                <a
                  href={item.institutionLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="focus-outline group rounded-md text-gray-400"
                >
                  <span className="animated-text font-medium"> {firstBlock}</span>
                  <span className="animated-text inline-block font-medium">
                    {secondBlock}
                    <ArrowUpRight className="animated-arrow ml-1 inline-block h-4 w-4" />
                  </span>
                </a>
              </div>
              <div className="">
                <p className="text-gray-300">{item.specialization}</p>
                <p className="font-mono text-sm font-medium text-gray-400">{item.grade}</p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-gray-300">Relevant Coursework:</span>
                <ul className="flex flex-wrap gap-1">
                  {item.coursework.map((course) => (
                    <li key={course} className="badge badge-blue">
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
