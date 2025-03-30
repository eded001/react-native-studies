import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        gap: 50,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        gap: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: "#000",
        elevation: 5,
    },
    content: {
        textAlign: "center",
        fontSize: 25
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    buttons: {
        gap: 10
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: '#1E90FF',
    },
    buttonText: {
        color: 'white',
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold"
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        textAlign: 'center',
    },
    buttonInput: {
        width: 135,
        height: 40,
        borderColor: "gray",
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal: 10
    },
    list: {
        width: 300,
        maxHeight: 166,
        backgroundColor: "#999",
        borderRadius: 10
    },
    item: {
        borderRadius: 20,
        textAlign: "center",
        padding: 10,
        marginVertical: 8,
        backgroundColor: "#ddd",
        width: '90%',
        alignItems: "center",
        alignSelf: 'center'
    }
});