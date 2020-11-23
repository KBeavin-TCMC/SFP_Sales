import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';

function InvoiceScreen(props) {
    return (
        <View style={styles.InvoiceContainer}>
        <Text>Hi</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    InvoiceContainer: {
        flex: 1,
        backgroundColor: colors.White,
    },
});

export default InvoiceScreen;