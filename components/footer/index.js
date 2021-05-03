import React from 'react';
import { useGlobalData } from 'lib/context/globalDataContext';

export const Footer = () => {
  return (
    <footer className="pb-10 bg-primary pt-14">
      <div className="container text-center">
        @ {new Date().getFullYear()} Webstantly WP Headless
      </div>
    </footer>
  );
};
