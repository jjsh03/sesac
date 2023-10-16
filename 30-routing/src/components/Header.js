import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <span>Router Tutorial</span>
      <ul className="menus">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/photos">Photos</Link>
        </li>
      </ul>
    </header>
  );
}
