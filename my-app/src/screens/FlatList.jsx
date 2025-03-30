import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import styles from '../assets/styles/styles';

export default function FlatListExample({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text>{item.title}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    style={styles.list}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

const DATA = [
    { id: '1', title: 'Primeiro Item' },
    { id: '2', title: 'Segundo Item' },
    { id: '3', title: 'Terceiro Item' },
];