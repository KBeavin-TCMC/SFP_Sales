import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';

function SmashScreen(props) {
    return (
        <View style={styles.smashContainer}>
        <Text>Hi</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    smashContainer: {
        flex: 1,
        backgroundColor: colors.Blue,
    },
});

export default SmashScreen;