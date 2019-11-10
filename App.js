/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';

import Splash from 'react-native-splash-screen';

import SkeletonContent from './Skeleton';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      Splash.hide();
    }, 500);
    setTimeout(()=>setLoad(false),5000)
  }, []);
  const [load, setLoad] = useState(true)
  return (
    <View style={{flex:1, backgroundColor:'#fff'}}>
      <StatusBar translucent/>
      <SkeletonContent
    containerStyle={{flex: 1, width: 300, justifyContent:'center', alignItems:'center', flexDirection:'row'}}
    isLoading={load}
    layout={[
    { width: 220, height: 500, marginBottom: 6 },
    { width: 180, height: 20, marginBottom: 6 },
    ]}
    >

    <Text>
        Your content
    </Text>

    <Text>
        Other content
    </Text>

</SkeletonContent>
    </View>
  );
};


export default App;
