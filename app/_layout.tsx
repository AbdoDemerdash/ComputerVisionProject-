import { Stack } from "expo-router";
import { useEffect } from "react";
import { I18nManager } from "react-native";

export default function RootLayout() {

  useEffect(()=>{
    I18nManager.allowRTL(false)
    I18nManager.forceRTL(false)
    },[])
    
  return(
    <Stack >
        <Stack.Screen name="index" options={{headerShown:false}} />
    </Stack>
  );
}
