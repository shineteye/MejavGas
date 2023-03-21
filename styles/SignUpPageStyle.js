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
    headerText: {
        color: foreGcolor,
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10,
    },
    headerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: '#fff',
        margin: 20
    },
    manImgContainer: {
        // backgroundColor: '#fff',
    },
    text: {
        fontWeight: 'bold',
        color: foreGcolor
    },
    form: {
        flex: 1,
        alignItems: 'center'
    },
    labelText: {
        color: foreGcolor,
        fontWeight: 400,
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
    launchBtn: {
        backgroundColor: foreGcolor,
        marginTop: 20,
        height: 45,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    launchBtnText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        display: 'flex',
    },
})

export default styles;