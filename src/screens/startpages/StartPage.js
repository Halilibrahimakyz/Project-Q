import { Container } from 'native-base';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button,NativeBaseProvider  } from "native-base";
import SvgComponent from '../../assets/svg/svg';


export default function StartPage() {



    return (
        <NativeBaseProvider>
        <View style={styles.Container}>
             <Image
        style={styles.tinyLogo}
        source={require('../../assets/png/logo2.png')}
      />
            <Button onPress={() => console.log('%cconsole.log', 'color: green;')}>Click Me</Button>
            
        </View>
     </NativeBaseProvider>
        
    );
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#1e1f1e',
        width: '100%',
        height: '100%',
        justifyContent:'center',
        alignItems: 'center',
        display: 'flex',
    },

});
