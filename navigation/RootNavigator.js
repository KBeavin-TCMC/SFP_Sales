import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

function RootNavigator(props) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={TabNavigator} />
        </Stack.Navigator>
    );
}

export default RootNavigator;