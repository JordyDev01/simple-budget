import { Pressable, StyleSheet, View, Text } from "react-native";


const LoginButtons = ({ login, signup, resetPassword }) => {


    return (
        <View style={styles.buttonsContainer}>
            <View style={styles.innerContainer}>
            <Pressable android_ripple={'#ccc'} style={({pressed}) => [styles.button, {backgroundColor: '#1444c6'}, pressed && styles.buttonPressed]} onPress={login}>
                <Text style={styles.text}>Sign in</Text>
            </Pressable>
            <Pressable android_ripple={'#ccc'} style={({pressed}) => [styles.button, {backgroundColor: '#15bc21'} , pressed && styles.buttonPressed]} onPress={signup}>
                <Text style={styles.text}>Sign up</Text>
            </Pressable>
            </View>
            <View style={styles.resetContainer}>
            <Pressable android_ripple={'#ccc'} style={({pressed}) => [styles.button, {backgroundColor: '#d0cd06'} , pressed && styles.buttonPressed]} onPress={resetPassword}>
                <Text style={styles.text}>Reset Password</Text>
            </Pressable>
            </View>
        </View>
    )
}

export default LoginButtons;

const styles = StyleSheet.create({
    buttonsContainer: {
        height: 'auto',
        width: 'auto',
        marginBottom: 10,
    },

    innerContainer: {
        flexDirection: 'row'
    },

    button: {
        height: 35,
        width: 120,
        margin: 9,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },

    buttonPressed: {
        opacity: 0.4,
    },

    resetContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    text: {
        fontWeight: 'bold',
        color: '#ffffff'
    }
});