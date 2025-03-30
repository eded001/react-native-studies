import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../assets/styles/styles';

export default function HelloWorld({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 25}}>Hello world</Text>

            {/* Botão para voltar para a tela anterior */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}