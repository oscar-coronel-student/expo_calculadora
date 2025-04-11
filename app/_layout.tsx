import { useEffect } from 'react';
import { View } from 'react-native'
import { Slot, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import { Colors } from '@/constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

  const insets = useSafeAreaInsets();

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  });

  useEffect(() => {
    if(loaded){
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if(!loaded) return null;

  return <>
    <StatusBar style='light' />
    <View
      style={{
        paddingTop: insets.top,
        backgroundColor: Colors.background,
        flex: 1
      }}
    >
      <Slot />
    </View>
  </>
}

export default RootLayout