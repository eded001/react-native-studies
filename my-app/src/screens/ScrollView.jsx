import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from '../assets/styles/styles';

export default function ScrollViewExample({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 25 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae lectus et sapien posuere porta in vitae purus. Fusce blandit ullamcorper ante sed molestie. Cras vel tempus nisi. Integer id vulputate felis. Nunc mollis nulla eros, eget sollicitudin turpis dictum id. Sed condimentum nunc diam, ut fringilla lorem blandit quis. Aenean blandit vulputate quam vitae consequat. Donec libero lorem, varius vel laoreet sed, sagittis at purus. Phasellus sollicitudin, est eget ornare faucibus, est mi condimentum justo, at vulputate nisl nisi a tortor. Curabitur diam ante, scelerisque eget quam ac, egestas efficitur massa. Cras consectetur ex eget erat pellentesque, eget porta enim aliquet.</Text>
                    <Text></Text>
                    <Text style={{ fontSize: 25 }}>Pellentesque et leo tincidunt, viverra sapien in, pretium enim. Phasellus ornare ligula pretium lorem congue molestie. Nunc nec ante elementum nisi fringilla elementum. Aenean imperdiet lacus id nisl vehicula, id sagittis nisi blandit. Suspendisse blandit ultrices eleifend. Maecenas nec mauris eu urna porttitor dapibus. Quisque ut neque urna. Fusce facilisis aliquet enim, eu gravida sapien hendrerit in.</Text>
                </View>
            </ScrollView>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}