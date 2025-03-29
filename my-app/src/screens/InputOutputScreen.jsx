import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from '../assets/styles/styles';

export default function InputOutputScreen({ navigation }) {
    const [text, setText] = useState("");

    return (
        <View style={styles.container}>

            <Text style={styles.content}>
                Olá, {text ? text : "desconhecido"}!
            </Text>

            <View>
                <TextInput
                    style={styles.buttonInput}
                    placeholder='Digite o seu nome'
                    value={text}
                    onChangeText={setText}
                />
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