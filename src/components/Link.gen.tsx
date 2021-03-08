/* TypeScript file generated from Link.res by genType. */
/* eslint-disable import/first */


import * as React from 'react';

// tslint:disable-next-line:no-var-requires
const LinkBS = require('./Link.bs');

// tslint:disable-next-line:interface-over-type-literal
export type Props = {
  readonly children: React.ReactNode; 
  readonly dark?: boolean; 
  readonly to_: string
};

export const make: React.ComponentType<{
  readonly children: React.ReactNode; 
  readonly dark?: boolean; 
  readonly to_: string
}> = LinkBS.make;
