import React from 'react';

//colors
import {Colors} from '../components/Styles' 
const { darkLight, brand, primary, tertiary, secondary } = Colors;

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



// screens
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Welcome from './../screens/Welcome';
import Bienvenue from './../screens/Bienvenue';
import Laboratoire from './../screens/Laboratoire';
import ParamettreLab from './../screens/ParamettreLab';





const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer style={{ backgroundColor: 'red' }}> 
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: tertiary,
          headerTransparent: true,
          headerTitle: '',
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}

        
        initialRouteName="Login"
        >

                
  
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Bienvenue" component={Bienvenue} />
        <Stack.Screen name ="Laboratoire" component={Laboratoire}/>
        <Stack.Screen name= "ParamettreLab" component={ParamettreLab}/>
        
       
       
        
        

        <Stack.Screen
          options={{
            headerTintColor: primary,
          }}
          name="Welcome"
          component={Welcome}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default RootStack;



