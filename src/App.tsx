/**
 * The starting point, and deliberately nothing more.
 *
 * This template is shared by several projects. It gives you a React + TypeScript app that runs,
 * a token file for colours and spacing, and your project's data under `src/data/` — the screen
 * itself is the work, and it is described on your tickets.
 *
 * Replace this component. It exists so `npm run dev` shows something real on the first run,
 * which is how you tell "my environment is broken" from "my code is wrong" later on.
 */
export default function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1 className="app-title">Your project runs</h1>
        <p className="app-sub">React + TypeScript + Vite · edit <code>src/App.tsx</code> and this page updates</p>
      </header>

      <section className="panel">
        <h2 style={{ marginTop: 0, fontSize: 'var(--t-lg)' }}>Next</h2>
        <ol className="next-steps">
          <li>Finish your setup ticket — it asks what <code>node --version</code> printed and whether this page loaded.</li>
          <li>Open <code>src/data/</code> and read the file named for your project, plus its TypeScript types.</li>
          <li>Open issue #1 on your repository and build the first ticket. Replace this component as you go.</li>
        </ol>
      </section>
    </main>
  )
}
