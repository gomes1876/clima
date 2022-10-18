import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Stack } from 'native-base';
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

