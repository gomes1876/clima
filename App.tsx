import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Text, VStack, Box, Stack } from 'native-base';
import { StyleSheet, View } from 'react-native';
import MainView from './src/screens/MainView';
import Colors from './src/shared/Colors';

export default function App() {
  return (

    <NativeBaseProvider>
      <Stack backgroundColor={Colors.secoundaryLight} flex={1}>
        <MainView />
        <StatusBar style="auto" />
      </Stack>
    </NativeBaseProvider>
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
