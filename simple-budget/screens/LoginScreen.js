import {Button, StyleSheet, Text, View, } from 'react-native';

const LoginScreen = ({ navigation }) => {

    function loginHandler() {
        navigation.navigate('after-signin');
    }

    return(
        <View style={styles.rootContainer}>
            <Text>Login Screen</Text>
            <Button title ='Press me!' onPress={loginHandler}/>
        </View>
        
    )
}

export default LoginScreen ;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
});