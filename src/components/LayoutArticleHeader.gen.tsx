/* TypeScript file generated from LayoutArticleHeader.res by genType. */
/* eslint-disable import/first */


import * as React from 'react';

// tslint:disable-next-line:no-var-requires
const LayoutArticleHeaderBS = require('./LayoutArticleHeader.bs');

// tslint:disable-next-line:interface-over-type-literal
export type Props = {
  readonly date?: string; 
  readonly description?: string; 
  readonly subhead: string; 
  readonly tags?: string[]; 
  readonly title: string
};

export const make: React.ComponentType<{
  readonly date?: string; 
  readonly description?: string; 
  readonly subhead: string; 
  readonly tags?: string[]; 
  readonly title: string
}> = LayoutArticleHeaderBS.make;
