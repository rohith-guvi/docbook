export default function LinuxBasicsDoc() {
  return (
    <article className="space-y-7 text-zinc-200">
      <section id="linux-overview" data-title="Linux Overview" className="space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-300">Module · Linux</p>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">Linux Basics</h1>
        <p className="max-w-3xl text-zinc-400">
          Linux powers cloud infrastructure, servers, containers, and developer machines with stability, control, and strong
          security defaults.
        </p>
      </section>

      <section id="shell-commands" data-title="Shell Commands" className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">Shell Commands</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-800 bg-black/60 p-4">
            <p className="font-mono text-sm text-emerald-300">pwd</p>
            <p className="mt-1 text-sm text-zinc-400">Print current directory.</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-black/60 p-4">
            <p className="font-mono text-sm text-emerald-300">ls -la</p>
            <p className="mt-1 text-sm text-zinc-400">List files including hidden metadata.</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-black/60 p-4">
            <p className="font-mono text-sm text-emerald-300">cd &lt;path&gt;</p>
            <p className="mt-1 text-sm text-zinc-400">Move to another directory.</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-black/60 p-4">
            <p className="font-mono text-sm text-emerald-300">cat file.txt</p>
            <p className="mt-1 text-sm text-zinc-400">Print file contents to terminal.</p>
          </div>
        </div>
      </section>

      <section id="permissions" data-title="Permissions" className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">Permissions</h2>
        <p className="text-zinc-400">
          Linux controls access with read/write/execute bits for user, group, and others. This is foundational for system
          security.
        </p>
        <div className="rounded-lg border border-zinc-800 bg-black px-4 py-3 font-mono text-xs text-emerald-300">
          chmod 755 deploy.sh
          <br />
          chown app:app deploy.sh
        </div>
      </section>
    </article>
  );
}
