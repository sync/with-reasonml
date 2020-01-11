/* TypeScript file generated from CommandsArea.re by genType. */
/* eslint-disable import/first */


import * as React from 'react';

// tslint:disable-next-line:no-var-requires
const CommandsAreaBS = require('./CommandsArea.bs');

// tslint:disable-next-line:interface-over-type-literal
export type Props = {
  readonly className?: string; 
  readonly defaultText?: string; 
  readonly setText?: (_1:((_1:string) => string)) => void; 
  readonly text?: string; 
  readonly textUseState?: [string, (_1:((_1:string) => string)) => void]
};

export const $$default: React.ComponentType<{
  readonly className?: string; 
  readonly defaultText?: string; 
  readonly setText?: (_1:((_1:string) => string)) => void; 
  readonly text?: string; 
  readonly textUseState?: [string, (_1:((_1:string) => string)) => void]
}> = CommandsAreaBS.default;

export default $$default;
