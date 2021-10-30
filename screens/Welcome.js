import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  Avatar,
  WelcomeImage,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  InnerContainer,
  WelcomeContainer,
  ButtonText,
  Line,
  Colors,

  
} from '../components/Styles.js';

import {Touchable, View,ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Formik } from 'formik';


const Welcome = ({navigation}) => {
  return (
    
    <ImageBackground
      source={require('../assets/img/bienvenue.jpg')}
      style={{
        flex: 1,
        justifyContent: "flex-end"
      }}
      resizeMode="cover"
    >

    </ImageBackground>


   
  )
}

export default Welcome;
