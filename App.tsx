import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Text, VStack, Box, Stack } from 'native-base';
import { StyleSheet, View } from 'react-native';
import MainView from './src/screens/MainView';

export default function App() {
  return (

    <NativeBaseProvider>
      <Stack backgroundColor={'amber.100'} w={'100%'} h={'100%'}>
        <MainView />
        {/* <Text>aaaa</Text> */}
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
