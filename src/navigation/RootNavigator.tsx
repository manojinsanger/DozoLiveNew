import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import MainStackNavigator from './MainStackNavigator';

const isLoggedIn = true;

export default function RootNavigator() {
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStackNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
