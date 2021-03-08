/* TypeScript file generated from BlogLayout.res by genType. */
/* eslint-disable import/first */


import * as React from 'react';

// tslint:disable-next-line:no-var-requires
const BlogLayoutBS = require('./BlogLayout.bs');

// tslint:disable-next-line:interface-over-type-literal
export type frontmatter = {
  readonly title: string; 
  readonly date: string; 
  readonly tags?: string[]
};

// tslint:disable-next-line:interface-over-type-literal
export type pageContext = { readonly html: string; readonly frontmatter: frontmatter };

// tslint:disable-next-line:interface-over-type-literal
export type Props = { readonly pageContext: pageContext };

export const make: React.ComponentType<{ readonly pageContext: pageContext }> = BlogLayoutBS.make;
