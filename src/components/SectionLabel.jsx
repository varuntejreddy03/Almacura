export default function SectionLabel({ children }) {
  return (
    <div className="mb-6">
      <div className="w-12 h-px bg-brand-teal mb-4"></div>
      <div className="flex items-center gap-4">
        <div className="w-10 h-px bg-brand-teal"></div>
        <span className="font-mono text-brand-teal text-xs tracking-[0.3em] uppercase">
          {children}
        </span>
      </div>
    </div>
  );
}
