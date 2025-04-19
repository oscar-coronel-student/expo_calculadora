import { useEffect } from 'react';
import { Platform, View } from 'react-native'
import { Slot, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { globalStyles } from '@/styles/global.style';
import { Colors } from '@/constants/Colors';


const isAndroid = Platform.OS === 'android'

isAndroid && NavigationBar.setBackgroundColorAsync('black');

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
    <StatusBar style='light' backgroundColor={ Colors.background } />
    <View
      style={{
        paddingTop: insets.top,
        ...globalStyles.background
      }}
    >
      <Slot />
    </View>
  </>
}

export default RootLayout