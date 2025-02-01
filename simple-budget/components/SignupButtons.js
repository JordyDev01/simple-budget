import { Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native";


const SignupButtons = ({ onCancel, onSubmit }) => {

    return (
        <View style={styles.buttonsContainer}>
            <View style={styles.innerContainer}>
                <Pressable android_ripple={'#ccc'} style={({pressed}) => [styles.button, {backgroundColor: '#e32f0c'}, pressed && styles.buttonPressed]} onPress={onCancel}>
                    <Text style={styles.text}>Cancel</Text>
                </Pressable>
                <Pressable android_ripple={'#ccc'} style={({pressed}) => [styles.button, {backgroundColor: '#1444c6'}, pressed && styles.buttonPressed]} onPress={onSubmit}>
                    <Text style={styles.text}>Submit</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default SignupButtons ;

const styles = StyleSheet.create({
    buttonsContainer: {
        height: 'auto',
        width: 'auto',
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
    text: {
        fontWeight: 'bold',
        color: '#ffffff'
    }
});