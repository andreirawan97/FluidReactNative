import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

import { FADE_DURATION } from '../constants/config';
import { FluidComponentProps } from '../types/globalTypes';

import { InView } from '.';

export default function Fade(props: FluidComponentProps) {
  const {
    when = true,
    duration = FADE_DURATION,
    hide = false,
    onEndAnimation,
  } = props;

  const [isInView, setIsInView] = useState(false);

  const fadeAnimVal = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!hide && when && isInView) {
      Animated.timing(fadeAnimVal, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }).start(() => onEndAnimation && onEndAnimation());
    }
  }, [fadeAnimVal, isInView, when, duration, hide, onEndAnimation]);

  return (
    <>
      {!hide && (
        <InView onChange={setIsInView}>
          <Animated.View
            style={{
              opacity: fadeAnimVal,
            }}
          >
            {props.children}
          </Animated.View>
        </InView>
      )}
    </>
  );
}
