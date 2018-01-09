import * as React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div>
        <h1>About</h1>
        <p>This is a really basic react example</p>
      </div>
      <Link to="/">Counter</Link>
    </div>
  );
}
