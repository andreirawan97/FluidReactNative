import { ReactNode } from 'react';

export type FluidComponentProps = {
  children: ReactNode;
  when?: boolean; // If true, do animation
  duration?: number; // Duration of the animation in ms
};
