import React, { useState } from 'react';
import { StyleSheet, Text, View, Button,  } from 'react-native';
import Home from './components/Home/Home';
import { styles } from './styles';

export default function App() {

  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

