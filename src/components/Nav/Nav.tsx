import './Nav.css';

import { h } from 'preact';

export function Nav() {
  return (
    <nav>
      <h2>Logo</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Store</li>
        <li>Team</li>
        <li>Projects</li>
      </ul>
    </nav>
  );
}
