import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNav from './src/navigation/mainNav';

export default function App() {
  return (
    <MainNav/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
