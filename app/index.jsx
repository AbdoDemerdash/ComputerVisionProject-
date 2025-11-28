import React, { useState } from "react";
import { Text, View, StyleSheet, Button,StatusBar,Pressable } from "react-native";
import { CameraView } from "expo-camera";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [scanned, setScanned] = useState(false);
  const [result, setResult] = useState('');


  const handleResult = ({ data }) => {
    setScanned(true);
    setResult(data)
  };

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#ffffff'}}>

        <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'}/>

        <Text style={styles.title}>Scanner Barcode</Text>


        <View style={styles.camera}>
         <CameraView
            style={{flex:1}}
            onBarcodeScanned={scanned ? undefined : handleResult}
            zoom={0.2}
          />
        </View>

        {scanned && (

          <View>

            <Text style={styles.result}>{result}</Text>

            <Pressable style={styles.reload} onPress={ () => setScanned(false) }>
              <Text style={styles.reloadText}>Reload</Text>
            </Pressable>

          </View>
        )}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize:30,
    fontWeight:500,
    paddingVertical:25,
    marginTop:10,
    textAlign:'center',
    backgroundColor:'#0000FF80'
  },
  camera:{
    width:"95%",
    height:'25%',
    marginHorizontal:'auto',
    marginVertical:50,
  },
  result:{
    fontSize:25,
    textAlign:'center',
    marginBottom:30
  },
  reload:{
    alignItems:'center'
  },
  reloadText:{
    backgroundColor:'#0000FF80',
    fontSize:20,
    paddingVertical:10,
    paddingHorizontal:30,
    borderRadius:5,
    color:'#fff'
  }
});
