import { ReactNode } from 'react';

export type FluidComponentProps = {
  children: ReactNode;
  when?: boolean; // If true, start the animation
  hide?: boolean; // If true, hide the children component then start the animation (If when is not provided).
  duration?: number; // Duration of the animation in ms
  onEndAnimation?: () => void; // Called when the animation is over
};

export type BounceComponentProps = Omit<FluidComponentProps, 'duration'>;
