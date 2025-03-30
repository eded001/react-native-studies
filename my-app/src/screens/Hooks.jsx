import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from '../assets/styles/styles';

export default function Hooks({ navigation }) {
    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.content}>Contador: {counter}</Text>

                <View style={styles.buttons}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setCounter(counter + 1)}
                    >
                        <Text style={styles.buttonText}>Adicionar +1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setCounter(0)}
                    >
                        <Text style={styles.buttonText}>Resetar</Text>
                    </TouchableOpacity>
                </View>
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