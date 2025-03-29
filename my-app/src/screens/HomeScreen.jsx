import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../assets/styles/styles';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Exemplos</Text>

            <View style={styles.buttons}>
                {/* Botão para navegar para a tela de Detalhes */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('HelloWorld')}
                >
                    <Text style={styles.buttonText}>Hello world</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Hooks')}
                >
                    <Text style={styles.buttonText}>Hooks</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('InputOutput')}
                >
                    <Text style={styles.buttonText}>Input/Output</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Image')}
                >
                    <Text style={styles.buttonText}>Image</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('ScrollView')}
                >
                    <Text style={styles.buttonText}>ScrollView</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}