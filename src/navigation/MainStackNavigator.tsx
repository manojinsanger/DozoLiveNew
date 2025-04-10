import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from './MainTabNavigator';
import Profile1 from '../screens/profileScreens/Profile1';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export type MainStackParamList = {
    Tabs: undefined;
    Profile1: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainStackNavigator() {
    return (
        <SafeAreaProvider>
            <Stack.Navigator>
                <Stack.Screen name="Tabs" component={MainTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Profile1" component={Profile1} />
            </Stack.Navigator>
        </SafeAreaProvider>
    );
}
