import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

import { FluidComponentProps } from '../types/globalTypes';
import { TRANSLATE_SEQUENCE_DURATION } from '../constants/config';

import { InView } from '.';

export default function Jump(props: FluidComponentProps) {
  const {
    when = false,
    duration = TRANSLATE_SEQUENCE_DURATION,
    hide = false,
    onEndAnimation,
  } = props;

  const [isInView, setIsInView] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const jumpAnimVal = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!hide && isInView && (when || shouldAnimate)) {
      Animated.sequence([
        Animated.timing(jumpAnimVal, {
          toValue: -15,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(jumpAnimVal, {
          toValue: 0,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(jumpAnimVal, {
          toValue: -10,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(jumpAnimVal, {
          toValue: 0,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(jumpAnimVal, {
          toValue: -5,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(jumpAnimVal, {
          toValue: 0,
          duration,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShouldAnimate(false);
        onEndAnimation && onEndAnimation();
      });
    }
  }, [
    jumpAnimVal,
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
              transform: [
                {
                  translateY: jumpAnimVal,
                },
              ],
            }}
          >
            {props.children}
          </Animated.View>
        </InView>
      )}
    </>
  );
}
