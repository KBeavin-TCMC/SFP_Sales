import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function AppLoading(props) {
    return (
        <View style={styles.loadingContainer}>
            <Text>Loading...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default AppLoading;