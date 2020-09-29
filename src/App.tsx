import { h, render } from 'preact';

import { Nav } from './components/Nav/Nav';

const App = () => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    }}
  >
    <Nav />
    <main
      className='container'
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        gap: '1rem',
        background: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)',
      }}
    >
      <h1> Typescript 💖 Preact with Swc </h1>
      <h3>Fast Dx and smaller bundle size</h3>
    </main>
    <footer>
      <ul
        style={{
          background: 'black',
          padding: '1rem',
          justifyContent: 'center',
        }}
      >
        <li>
          <a
            style={{ color: 'white' }}
            href='https://preactjs.com/guide/v10/getting-started/'
          >
            Preact - Getting Started
          </a>
        </li>
        <li>
          <a
            style={{ color: 'white' }}
            href='https://basarat.gitbook.io/typescript/getting-started'
          >
            Typescript Online book
          </a>
        </li>
        <li>
          <a
            style={{ color: 'white' }}
            href='https://swc-project.github.io/docs/usage-swc-loader'
          >
            Swc-loader config doc
          </a>
        </li>
      </ul>
    </footer>
  </div>
);

render(<App />, document.getElementById('app'));
