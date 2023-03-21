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
    headerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        margin: 20
    },
    headerText: {
        color: foreGcolor,
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10,
    },
    image: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    body: {
        flex: 3,
        // backgroundColor: '#fff',
    },
    labelText: {
        color: foreGcolor,
        fontWeight: 'bold'
    },
    textInput: {
        borderWidth: 4,
        borderRadius: 8,
        color: '#fff',
        borderColor: '#fff',
        backgroundColor: foreGcolor,
        padding: 8,
        margin: 10,
        width: 200,
    },
    text: {
        fontWeight: 'bold',
        color: foreGcolor
    }
})

export default styles;