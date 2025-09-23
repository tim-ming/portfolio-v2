export default function IntroSection() {
  const name = 'Tim Ming';
  const role = 'Software Engineer';
  const summary =
    "Hi! I'm a fresh graduate from Monash University Malaysia. I build full-stack apps and websites, and enjoy keeping up with digital design trends as a hobby.";

  return (
    <header className="mb-12">
      <h1 className="text-2xl leading-tight font-medium text-blue-200">
        <a
          href="https://timming.dev"
          className="focus-outline inline-flex w-fit rounded-sm hover:text-blue-100 focus-visible:text-blue-100"
        >
          {name}
        </a>
      </h1>
      <p className="mb-4 text-2xl leading-tight text-gray-500">{role}</p>
      <p className="max-w-xl text-base text-gray-400">{summary}</p>
    </header>
  );
}
