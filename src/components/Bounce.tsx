import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

import { BounceComponentProps } from '../types/globalTypes';

import { InView } from '.';

export default function Bounce(props: BounceComponentProps) {
  const { when = false, hide = false, onEndAnimation } = props;

  const [isInView, setIsInView] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const springAnimVal = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    if (!hide && isInView && (when || shouldAnimate)) {
      Animated.spring(springAnimVal, {
        toValue: 1,
        tension: 30,
        friction: 2.5,
        useNativeDriver: true,
      }).start(() => {
        setShouldAnimate(false);
        onEndAnimation && onEndAnimation();
      });
    }
  }, [springAnimVal, isInView, when, hide, onEndAnimation, shouldAnimate]);

  return (
    <>
      {!hide && (
        <InView onChange={setIsInView}>
          <Animated.View
            style={{
              transform: [
                {
                  scale: springAnimVal,
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
