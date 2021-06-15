import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Fade, Jump, Shake } from './components';

export default function App() {
  const [showFadeAnim, setFadeAnim] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeAnim(true);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.helloFluid}>Hello Fluid!</Text>

      <Fade>
        <Text>Fade on Mount!</Text>
      </Fade>

      <Fade when={showFadeAnim}>
        <View style={styles.timeoutUsageContainer}>
          <Text>I will appear 1 sec later!</Text>
        </View>
      </Fade>

      <View style={styles.usageContainer}>
        <Shake>
          <Text>I shake!</Text>
        </Shake>
      </View>

      <View style={styles.usageContainer}>
        <Jump>
          <Text>I jump!</Text>
        </Jump>
      </View>

      <StatusBar style={'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helloFluid: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  usageContainer: {
    marginBottom: 12,
  },
  timeoutUsageContainer: {
    marginVertical: 12,
  },
});
