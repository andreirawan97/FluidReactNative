import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

import { FADE_DURATION } from '../constants/config';
import { FluidComponentProps } from '../types/globalTypes';

import { InView } from '.';

export default function Fade(props: FluidComponentProps) {
  const {
    when = false,
    duration = FADE_DURATION,
    hide = false,
    onEndAnimation,
  } = props;

  const [isInView, setIsInView] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const fadeAnimVal = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!hide && isInView && (when || shouldAnimate)) {
      Animated.timing(fadeAnimVal, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }).start(() => {
        setShouldAnimate(false);
        onEndAnimation && onEndAnimation();
      });
    }
  }, [
    fadeAnimVal,
    isInView,
    when,
    duration,
    hide,
    onEndAnimation,
    shouldAnimate,
  ]);

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
