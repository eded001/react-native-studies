import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

import styles from "../assets/styles/styles";

import { createTable, createSchedule, editSchedule, getSchedules, deleteSchedule, dropTable } from './../utils/functionsDB';

export default function SQLiteDB({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{... styles.buttons, backgroundColor: "#ddd", padding: 15, borderRadius: 15}}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={ createTable }
                >
                    <Text style={styles.buttonText}>Criar Tabela</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={ createSchedule }
                >
                    <Text style={styles.buttonText}>Inserir valores tests</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={ editSchedule }
                >
                    <Text style={styles.buttonText}>Editar valores testes</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={ getSchedules }
                >
                    <Text style={styles.buttonText}>Ver valores testes</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={ deleteSchedule }
                >
                    <Text style={styles.buttonText}>Remover valores testes</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={ dropTable }
                >
                    <Text style={styles.buttonText}>Dropar tabela</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}