import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import MainStackNavigator from './MainStackNavigator';
import { AuthProvider } from '../context/AuthProvider';

const isLoggedIn = true;

export default function RootNavigator() {
  return (
    <NavigationContainer>
      {/* <AuthProvider> */}
        {isLoggedIn ? <MainStackNavigator /> : <AuthNavigator />}
      {/* </AuthProvider> */}
    </NavigationContainer>
  );
}
