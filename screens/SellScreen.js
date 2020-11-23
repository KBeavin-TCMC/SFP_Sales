import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';

function SellScreen(props) {
    return (
        <View style={styles.sellContainer}>
        <Text>Hi</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    sellContainer: {
        flex: 1,
        backgroundColor: colors.Navy,
    },
});

export default SellScreen;