export type Education = {
  degree: string;
  institution: string;
  specialization: string;
  grade: string;
  coursework: string[];
  period: string;
  location: string;
  institutionLink: string;
};

export const education: Education[] = [
  {
    degree: 'Bachelor of Computer Science (Advanced)',
    institution: 'Monash University',
    specialization: 'Specialization in Advanced Computer Science',
    grade: 'CGPA: 3.88/4.00',
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
