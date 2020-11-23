import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';

function ReportScreen(props) {
    return (
        <View style={styles.reportContainer}>
        <Text>Hi</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    reportContainer: {
        flex: 1,
        backgroundColor: colors.White,
    },
});

export default ReportScreen;