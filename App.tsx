/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {RootSiblingParent} from 'react-native-root-siblings';
import Toast from 'react-native-root-toast';
import {NavigationContainer} from '@react-navigation/native';
import GDtoast from './src/components/GDtoast';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfilePage} from './src/pages/ProfilePage';
import {HomePage} from './src/pages/HomePage';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <RootSiblingParent>
      {/* 页面渲染时，需要挂在到DOM上 */}
      <Toast />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name="Profile" component={ProfilePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
