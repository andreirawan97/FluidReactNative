import React, { ReactNode } from 'react';
import RawInView from 'react-native-component-inview';

type Props = {
  children: ReactNode;
  onChange: (isVisible: boolean) => void;
};

export default function InView(props: Props) {
  const { onChange } = props;

  return <RawInView onChange={onChange}>{props.children}</RawInView>;
}
