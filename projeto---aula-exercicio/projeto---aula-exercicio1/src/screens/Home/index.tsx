import React, { useState } from 'react';
import {SafeAreaView, Text, } from 'react-native';

import { styles } from './styles';

export function Home() {
  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.text}>
        Luana!
      </Text>
      </SafeAreaView>
  );
}