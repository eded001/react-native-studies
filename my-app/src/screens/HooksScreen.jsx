import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from '../assets/styles/styles';

export default function HooksScreen({ navigation }) {
    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.content}>Contador: {counter}</Text>

                <TouchableOpacity
                    style={styles.button}
                >
                    <Text
                        style={styles.buttonText}
                        onPress={() => setCounter(counter + 1)}
                    >Adicionar +1</Text>
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