/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Button, Pressable, Text} from 'react-native';
import Animated from 'react-native-reanimated';

const RootStack = createStackNavigator();

const Login = ({navigation}) => {
  return (
    <Animated.View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login</Text>
      <Button title="Signin" onPress={() => navigation.navigate('Home')} />
    </Animated.View>
  );
};

const Home = ({navigation}) => {
  return (
    <Animated.View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text>Signout</Text>
      </Pressable>
    </Animated.View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Home" component={Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
