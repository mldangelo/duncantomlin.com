import React, { Suspense } from 'react';
import { importMDX } from 'mdx.macro';
import Template from '../components/template';

const Content = importMDX.sync('../markdown/Contact.mdx');

const Page = () => (
  <Template>
    <Suspense fallback={<div>Loading...</div>}>
      <Content />
    </Suspense>
  </Template>
);

export default Page;
