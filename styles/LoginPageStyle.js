import { StyleSheet } from "react-native";

const backgcolor = "#FFFFFF";
const foreGcolor = '#227BFF';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgcolor,
        alignItems: 'center',
        color: 'white',
        justifyContent: 'center',
        height: '100%'
    },
    modalContainer: {
        flex: 1,
        backgroundColor: backgcolor,
        alignItems: 'center',
        color: 'white',
        justifyContent: 'center',
        height: '100%'
    },
    modalContent: {
        flex: 1,
        // backgroundColor: '#ff2321'
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: backgcolor,
    },
    headerText: {
        color: foreGcolor,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    labelText: {
        color: foreGcolor,
        fontWeight: 'bold'
    },
    textInput: {
        borderWidth: 2,
        borderLeftColor: backgcolor,
        borderRightColor: backgcolor,
        borderTopColor: backgcolor,
        color: foreGcolor,
        borderColor: foreGcolor,
        backgroundColor: backgcolor,
        fontWeight: 600,
        padding: 8,
        marginBottom: 10,
        width: 200,
    },
    text: {
        fontWeight: 'bold'
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    launchBtn: {
        backgroundColor: foreGcolor,
        height: 50,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 30
    },
    launchBtnText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        display: 'flex',
    },
})

export default styles;