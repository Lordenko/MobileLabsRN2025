import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { CustomThemeProvider } from './themes/ThemeProvider';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <CustomThemeProvider>
      <NavigationContainer>
        <AppNavigator />
        <Toast /> {}
      </NavigationContainer>
    </CustomThemeProvider>
  );
}
