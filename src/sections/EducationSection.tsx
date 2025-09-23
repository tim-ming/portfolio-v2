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
  },
];

export default function EducationSection() {
  return (
    <section id="education" data-section>
      <SectionHeader title="Education" />
      <ul className="space-y-8">
        {education.map((item) => (
          <li key={item.degree} className="flex flex-col gap-8 text-base text-gray-300">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex w-full flex-col leading-tight">
                {/* Left column */}
                <div className="flex items-end justify-between">
                  <span className="font-medium text-white">{item.degree}</span>
                  <span className="text-gray-300">{item.period}</span>
                </div>

                {/* Right column */}
                <div className="flex items-start justify-between">
                  <span className="text-gray-400">{item.institution}</span>
                  <span className="text-gray-400">{item.location}</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-300">{item.specialization}</p>
              <p className="text-gray-400">{item.grade}</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-300">Relevant Coursework:</span>
              <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-400">
                {item.coursework.map((course) => (
                  <li key={course} className="badge badge-blue">
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
