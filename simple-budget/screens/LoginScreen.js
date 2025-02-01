
import {useState, useEffect} from 'react';
import {Image, StyleSheet, TextInput, View, } from 'react-native';
import LoginButtons from '../components/LoginButtons';
import logo from '../assets/image/simple-budget-logo-2.webp';

const LoginScreen = ({ navigation }) => {
    const [username, SetUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        navigation.setOptions({title: 'Simple Budget'})
    }, [navigation])
    

    function loginHandler() {
        navigation.navigate('after-signin');
    }

    function signupHandler() {
        navigation.navigate('signup');
    };

    function resetPasswordHandler() {
        navigation.navigate('reset');
    }

    return(
        <View style={styles.rootScreen}>
            <View>
                <Image style={styles.image} source={logo}/>

                <View style={styles.container}>
                    <TextInput 
                        style ={styles.textInputLayout}
                        onChangeText={SetUsername}
                        value={username}
                        placeholder='Username'
                    />
                    <TextInput 
                        style={styles.textInputLayout}
                        onChangeText={setPassword}
                        value={password}
                        placeholder='Password'
                        secureTextEntry={true}
                    />
                   <LoginButtons login={loginHandler} signup={signupHandler} resetPassword={resetPasswordHandler}/>
                </View>
            </View>
        </View>
        
    )
}

export default LoginScreen ;

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1, 
        elevation: 4,
        backgroundColor: '#c2c0c0',
    },

    image: {
        height: '50%',
        width: '70%',
        borderWidth: 1,
        borderRadius: 40,
        borderColor: 'black',
        marginTop: 20,
        marginBottom: 'auto',
        alignSelf: 'center',
    },

    container: {
        backgroundColor: '#958e8e',
        alignItems: 'center',
        borderWidth: 1,
    },

    buttonContainer: {
        flexDirection: 'row'
    },

    textInputLayout: {
        height: 40,
        width: '70%',
        backgroundColor: '#ffffff',
        margin: 6,
        marginTop: 15,
        borderWidth: 1,
        borderRadius: 5,
    },

});