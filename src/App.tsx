const highlights = [
  'Fast iteration with Vite',
  'Type-safe components with TypeScript',
  'A clean baseline ready for features',
]

function App() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">React starter</p>
        <h1>Build the app from a focused, modern base.</h1>
        <p className="lede">
          This starter gives you a working React setup with a polished landing
          surface, sensible TypeScript defaults, and a structure that is easy to
          extend.
        </p>

        <div className="actions">
          <a className="primary" href="https://react.dev" target="_blank" rel="noreferrer">
            React Docs
          </a>
          <a className="secondary" href="https://vite.dev" target="_blank" rel="noreferrer">
            Vite Docs
          </a>
        </div>
      </section>

      <section className="panel" aria-label="starter highlights">
        <h2>What is included</h2>
        <ul>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App