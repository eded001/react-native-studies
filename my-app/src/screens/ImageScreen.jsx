import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";

import styles from '../assets/styles/styles';

export default function ImageScreen({ navigation }) {
    // Obtendo as dimensões da tela
    const { width, height } = Dimensions.get("window");

    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={{ width, height: height / 2 }}  // Metade da altura da tela
                    source={require("../assets/images/Johnny_Joestar.png")}
                    resizeMode="contain"
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