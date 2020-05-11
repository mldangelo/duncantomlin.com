import React, { lazy, Suspense } from 'react';
import { importMDX } from 'mdx.macro';
const Content = lazy(() => importMDX('../markdown/Projects.mdx'));

const Page = () => (
    <>
    <Suspense fallback={<div>Loading...</div>}>
        <Content />
    </Suspense>
    </>
);
export default Page;