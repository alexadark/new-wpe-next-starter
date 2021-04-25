import React from 'react';

import tw, { styled, css } from 'twin.macro';

import { getStaticProps } from '@/lib/appGetStaticProps';

const TestComponents = () => {
  return (
    <div className="container">
      <h1>test components on this page</h1>
    </div>
  );
};

export { getStaticProps };

export default TestComponents;
