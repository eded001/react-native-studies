import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, Pressable } from "react-native";
import styles from '../assets/styles/styles';

export default function ModalExample({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{... styles.content, fontSize: 20}}>Modal aberto!</Text>
                        <Pressable
                            style={[styles.button, styles.button]}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.buttonText}>Fechar Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Pressable
                style={[styles.button, styles.button]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.buttonText}>Aparecer modal</Text>
            </Pressable>

            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}