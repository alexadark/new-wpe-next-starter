import React from 'react';
import Link from 'next/link';
import { Menu } from './Menu';

export const Header = () => {

  return (
    <header className="py-4 bg-primary">
      <div className="container flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white uppercase">
          <Link href="/">
            <a className="text-white hover:text-white hover:no-underline">
              Title
            </a>
          </Link>
        </h1>
        <Menu />
      </div>
    </header>
  );
};
