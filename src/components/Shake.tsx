import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

import { TRANSLATE_SEQUENCE_DURATION } from '../constants/config';
import { FluidComponentProps } from '../types/globalTypes';

import { InView } from '.';

export default function Shake(props: FluidComponentProps) {
  const {
    when = true,
    duration = TRANSLATE_SEQUENCE_DURATION,
    hide = false,
    onEndAnimation,
  } = props;

  const [isInView, setIsInView] = useState(false);

  const shakeAnimVal = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!hide && when && isInView) {
      Animated.sequence([
        Animated.timing(shakeAnimVal, {
          toValue: 6,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimVal, {
          toValue: -6,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimVal, {
          toValue: 6,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimVal, {
          toValue: -6,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimVal, {
          toValue: 6,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimVal, {
          toValue: 0,
          duration,
          useNativeDriver: true,
        }),
      ]).start(() => onEndAnimation && onEndAnimation());
    }
  }, [shakeAnimVal, isInView, when, duration, hide, onEndAnimation]);

  return (
    <>
      {!hide && (
        <InView onChange={setIsInView}>
          <Animated.View
            style={{
              transform: [
                {
                  translateX: shakeAnimVal,
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
