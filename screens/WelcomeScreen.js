import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <View style={styles.welcomeContainer}>
            <Text>Hi</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    welcomeContainer: {
        flex: 1,
        backgroundColor: colors.Red,
    },
});

export default WelcomeScreen;