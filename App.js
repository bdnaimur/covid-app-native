import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Home from './src/screens/home';


export default function App() {

  const [loaded] = useFonts({
    GraphikRegular: require('./assets/fonts/GraphikRegular.otf'),
    GraphikMedium: require('./assets/fonts/GraphikMedium.otf'),
    GraphikSemiBold: require('./assets/fonts/GraphikSemibold.otf'),
  });

  if (!loaded) {
    return null;
  } 

  return (
    < >
      <Home/>
      <StatusBar style="auto" />
    </>
  );
}


