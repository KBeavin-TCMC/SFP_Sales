import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppLoading from '../components/AppLoading';
import WelcomeScreen from '../screens/WelcomeScreen';
import SellScreen from '../screens/SellScreen';
import MaintainScreen from '../screens/MaintainScreen';
import InvoiceScreen from '../screens/InvoiceScreen';
import ReportScreen from '../screens/ReportScreen';
import SmashScreen from '../screens/SmashScreen';

import colors from '../config/colors';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Welcome') {
                        iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                    } else if (route.name === 'Sell') {
                        iconName = focused ? 'ios-card' : 'ios-card-outline';
                    } else if (route.name === 'Smash') {
                        iconName = focused ? 'ios-aperture' : 'ios-aperture-outline';
                    } else if (route.name === 'Maintain') {
                        iconName = focused ? 'ios-alarm' : 'ios-alarm-outline';
                    } else if (route.name === 'Invoice') {
                        iconName = focused ? 'ios-albums' : 'ios-albums-outline';
                    } else if (route.name === 'Report') {
                        iconName = focused ? 'ios-copy' : 'ios-copy-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                }
            })}
            tabBarOptions={{
                activeTintColor: colors.Red,
                inactiveTintColor: colors.Blue,
                inactiveBackgroundColor: colors.Gray,
                activeBackgroundColor: colors.White,
            }}
        >

            <Tab.Screen name="Welcome" component={WelcomeScreen} />
            <Tab.Screen name="Sell" component={SellScreen} />
            <Tab.Screen name="Smash" component={SmashScreen} />
            <Tab.Screen name="Maintain" component={MaintainScreen} options={{ tabBarBadge: 1 }} />
            <Tab.Screen name="Invoice" component={InvoiceScreen} />
            <Tab.Screen name="Report" component={ReportScreen} />

        </Tab.Navigator>
    )
}

export default TabNavigator;