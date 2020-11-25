import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RootNavigator from './navigation/RootNavigator';
import AppLoading from './components/AppLoading';
import WelcomeScreen from './screens/WelcomeScreen';

export default class App extends React.Component {
  state = {
    appIsReady: false,
    isAuth: false,
  }

  _isMounted = false

  componentDidMount() {

    setTimeout(() => {
      this.setState({
        appIsReady: true,
      })
    }, 1000); // Simulate network

    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render () {
    if (!this.state.appIsReady) {
      return <AppLoading />
    }
    return (
      <WelcomeScreen />

      
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    )
  }
}