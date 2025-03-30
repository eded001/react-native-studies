import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from '../assets/styles/styles';

export default function SafeAreaPreview({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('ExampleWithSafeArea')}
                >
                    <Text style={styles.buttonText}>Exemplo com Safe area</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('ExampleWithoutSafeArea')}
                >
                    <Text style={styles.buttonText}>Exemplo sem Safe area</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}