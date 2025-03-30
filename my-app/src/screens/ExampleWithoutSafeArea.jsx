import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from '../assets/styles/styles';

export default function ExampleWithoutSafeArea({ navigation }) {
    return (
        <View>
            <Text style={{ fontSize: 20, textAlign: "center"}}>Exemplo sem safe area</Text>

            <View style={styles.container}>
                <TouchableOpacity
                    style={{... styles.button, position: "absolute", top: 10}}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}