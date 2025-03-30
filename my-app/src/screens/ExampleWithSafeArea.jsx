import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from '../assets/styles/styles';

export default function ExampleWithoutSafeArea({ navigation }) {
    return (
        <SafeAreaView>
            <Text style={{ fontSize: 20, textAlign: "center" }}>Exemplo com safe area</Text>

            <View style={styles.container}>
                <TouchableOpacity
                    style={{ ...styles.button, position: "absolute", top: 10 }}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}