import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Fade, Jump, Shake } from './components';

export default function App() {
  const [showFadeAnim, setShowFadeAnim] = useState(false);
  const [showAnimatedError, setShowAnimatedError] = useState(false);
  const [showAnimatedTextInput, setShowAnimatedTextInput] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFadeAnim(true);
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

      <Fade hide>
        <Text>I am hidden!</Text>
      </Fade>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => setShowAnimatedError(true)}
        >
          <Text style={styles.touchableText}>Show error</Text>
        </TouchableOpacity>

        <Fade hide={!showAnimatedError}>
          <Text style={styles.errorText}>Error occured!</Text>
        </Fade>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => setShowAnimatedTextInput(true)}
        >
          <Text style={styles.touchableText}>Shake on demand</Text>
        </TouchableOpacity>

        <Shake
          when={showAnimatedTextInput}
          onEndAnimation={() => setShowAnimatedTextInput(false)}
        >
          <TextInput style={styles.textInput} />
        </Shake>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  touchable: {
    marginRight: 12,
  },
  touchableText: {
    fontWeight: 'bold',
    color: '#57abd2',
  },
  errorText: {
    color: '#ef4135',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 8,
    padding: 4,
    width: 180,
  },
});
