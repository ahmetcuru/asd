import React from 'react';
import { AppLoading } from 'expo';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import AppContainer from './src/navigation/AppNavigator';

//Database import
import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAVCpi_p50Qvx2V27y-0zxO8cj71qTkfDo",
    authDomain: "mobilapp-b9a34.firebaseapp.com",
    databaseURL: "https://mobilapp-b9a34.firebaseio.com",
    projectId: "mobilapp-b9a34",
    storageBucket: "mobilapp-b9a34.appspot.com",
    messagingSenderId: "577910895494",
    appId: "1:577910895494:web:1e3ec5897af6cfb2d7f207",
    measurementId: "G-ESQX0MLTK7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {

  state = {
    assetsLoaded: false,
  };

  constructor(){
    super();
    console.disableYellowBox = true;
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/background.png'),
        require('./assets/images/logo.png'),
      ]),
      Font.loadAsync({
        'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
        
      }),
    ]);
  };

 
  render() {
    return (
        this.state.assetsLoaded ?    
          <AppContainer/>  
          :         
          <AppLoading
            startAsync={this._loadResourcesAsync}
            onFinish={() => this.setState({ assetsLoaded: true })}
            onError={console.warn}
            autoHideSplash={true}
          />
    );
  }
}