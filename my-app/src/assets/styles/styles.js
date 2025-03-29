import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        gap: 50,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    },
    content: {
        textAlign: "center",
        fontSize: 25,
        marginBottom: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    buttons: {
        gap: 10
    },
    button: {
        backgroundColor: '#1E90FF',
        padding: 10,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold"
    },
    buttonInput: {
        width: 135,
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        paddingHorizontal: 10
    }
});