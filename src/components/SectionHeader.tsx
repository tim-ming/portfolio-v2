export default function SectionHeader({ title, content }: { title: string; content?: string }) {
  return (
    <div className="mb-6 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-200 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-300"></span>
        </span>
        <h2 className="font-mono text-sm font-medium text-blue-200 uppercase">{title}</h2>
      </div>
      {content && <p className="max-w-2xl text-sm text-gray-400">{content}</p>}
    </div>
  );
}
