import { View, Text } from 'react-native'
import React from 'react'

export default function Header() {
    return (
        <View>
            <Text style={styles.title}>Header</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    }
});