export function PageShell({
  children,
  eyebrow,
  kicker,
  title
}: {
  children: React.ReactNode;
  eyebrow: string;
  kicker?: string;
  title: string;
}) {
  return (
    <main className="mx-auto w-full max-w-6xl overflow-x-hidden px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <header className="codex-page-header rounded-md px-4 py-5 sm:px-6 sm:py-7">
        <div className="relative min-w-0">
          <div className="codex-rule mb-4 rounded-sm" />
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-meadow sm:text-xs">{eyebrow}</p>
          <h1 className="mt-2 max-w-4xl break-words text-2xl font-black leading-tight text-green-950 min-[420px]:text-3xl sm:text-5xl">{title}</h1>
          {kicker ? <p className="mt-3 max-w-[17.5rem] break-words text-sm font-semibold leading-6 text-green-950/68 sm:max-w-2xl">{kicker}</p> : null}
        </div>
      </header>
      <div className="mt-5 sm:mt-6">{children}</div>
    </main>
  );
}
