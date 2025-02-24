import { Pressable, StyleSheet, Text } from "react-native"
import color from "../constant/Color";


const LogoffButton = ({ logoffHandler }) => {

    return <Pressable style={({ pressed }) => [styles.btnContainer, pressed && styles.pressed]} onPress={logoffHandler}>
            <Text style={styles.text}>Log off</Text>
    </Pressable>
}


export default LogoffButton;

const styles = StyleSheet.create({
    btnContainer: {
        height: 'auto',
        width: 'auto',
        paddingRight: 10
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.accentColor200
    },
    pressed: {
        opacity: 0.3
    }
})