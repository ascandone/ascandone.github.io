/* TypeScript file generated from Bindings.res by genType. */
/* eslint-disable import/first */


import {faInstagram as faInstagramNotChecked} from '@fortawesome/free-brands-svg-icons';

import {faLinkedin as faLinkedinNotChecked} from '@fortawesome/free-brands-svg-icons';

import {faGithub as faGithubNotChecked} from '@fortawesome/free-brands-svg-icons';

import {FontAwesomeIcon as FontAwesomeIconNotChecked} from '@fortawesome/react-fontawesome';

// In case of type error, check the type of 'faInstagram' in 'Bindings.re' and '@fortawesome/free-brands-svg-icons'.
export const faInstagramTypeChecked: Fontawesome_iconDefinition = faInstagramNotChecked;

// Export 'faInstagram' early to allow circular import from the '.bs.js' file.
export const faInstagram: unknown = faInstagramTypeChecked as Fontawesome_iconDefinition;

// In case of type error, check the type of 'faLinkedin' in 'Bindings.re' and '@fortawesome/free-brands-svg-icons'.
export const faLinkedinTypeChecked: Fontawesome_iconDefinition = faLinkedinNotChecked;

// Export 'faLinkedin' early to allow circular import from the '.bs.js' file.
export const faLinkedin: unknown = faLinkedinTypeChecked as Fontawesome_iconDefinition;

// In case of type error, check the type of 'faGithub' in 'Bindings.re' and '@fortawesome/free-brands-svg-icons'.
export const faGithubTypeChecked: Fontawesome_iconDefinition = faGithubNotChecked;

// Export 'faGithub' early to allow circular import from the '.bs.js' file.
export const faGithub: unknown = faGithubTypeChecked as Fontawesome_iconDefinition;

// In case of type error, check the type of 'FontAwesomeIcon' in 'Bindings.re' and '@fortawesome/react-fontawesome'.
export const FontAwesomeIconTypeChecked: React.ComponentType<{
  readonly className?: string; 
  readonly icon: Fontawesome_iconDefinition; 
  readonly size?: 
    "xs"
  | "lg"
  | "10x"
}> = FontAwesomeIconNotChecked;

// Export 'FontAwesomeIcon' early to allow circular import from the '.bs.js' file.
export const FontAwesomeIcon: unknown = FontAwesomeIconTypeChecked as React.ComponentType<{
  readonly className?: string; 
  readonly icon: Fontawesome_iconDefinition; 
  readonly size?: 
    "xs"
  | "lg"
  | "10x"
}>;

import {IconDefinition as $$Fontawesome_iconDefinition} from '@fortawesome/free-brands-svg-icons';

// tslint:disable-next-line:interface-over-type-literal
export type Fontawesome_iconDefinition = $$Fontawesome_iconDefinition;
