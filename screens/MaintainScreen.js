import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';

function MaintainScreen(props) {
    return (
        <View style={styles.maintainContainer}>
        <Text>Hi</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    maintainContainer: {
        flex: 1,
        backgroundColor: colors.Gray,
    },
});

export default MaintainScreen;