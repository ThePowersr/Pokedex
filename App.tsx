import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navigator } from './src/navigator/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/navigator/Tabs';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tabs />
    </NavigationContainer>
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
