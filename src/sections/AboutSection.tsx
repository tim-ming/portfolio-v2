const paragraphs = [
  'I build opinionated interfaces that balance clarity with atmosphere. My process pairs rapid prototyping, shader experimentation, and tight collaboration with design partners to deliver purposeful digital experiences.',
  'When I am not fine-tuning motion curves, you will find me exploring Swiss graphic archives, refining a custom component library, or testing how far WebGL can be pushed on mobile hardware.',
];

export default function AboutSection() {
  return (
    <section id="about" className="space-y-4">
      <h2>About Me</h2>
      {paragraphs.map((text, index) => {
        const tone = index === 0 ? 'text-gray-300' : 'text-gray-400';

        return (
          <p key={text} className={`max-w-2xl text-base leading-relaxed ${tone}`}>
            {text}
          </p>
        );
      })}
    </section>
  );
}
