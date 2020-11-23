import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WelcomeScreen from './screens/WelcomeScreen';
import SellScreen from './screens/SellScreen';
import MaintainScreen from './screens/MaintainScreen';
import InvoiceScreen from './screens/InvoiceScreen';
import ReportScreen from './screens/ReportScreen';
import SmashScreen from './screens/SmashScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Sell" component={SellScreen} />
        <Tab.Screen name="Smash" component={SmashScreen} />
        <Tab.Screen name="Maintain" component={MaintainScreen} />
        <Tab.Screen name="Invoice" component={InvoiceScreen} />
        <Tab.Screen name="Report" component={ReportScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}