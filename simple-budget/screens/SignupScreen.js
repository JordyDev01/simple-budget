import {Alert, StyleSheet, TextInput, View, KeyboardAvoidingView, Platform} from 'react-native'; 
import color from '../constant/Color';
import { useState } from 'react';
import SignupButtons from '../components/SignupButtons';
import { auth } from '../firebase/config';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import * as SecureStore from 'expo-secure-store';
import { createUser } from '../firebase/firebase-logics';




const SignupScreen = ({ navigation })=> {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function onCancelHandler() {
        Alert.alert('Cancel', 'do you want to cancel?', [{
            text: 'No',
            onPress: () => console.log('Cancel pressed'),
            style: {
                color: '#da1a1a'
            }
        },
    {
        text: 'Yes',
        onPress: () => navigation.pop(),
        style: {
            color: '#3218dc'
        }
    }]);

    }

    function onSubmitHandler() {
        if (email !== confirmEmail) {
            return Alert.alert('Error', 'Emails do not match', [{ text: 'OK' }]);
        }
        if (password !== confirmPassword) {
            return Alert.alert('Error', 'Passwords do not match', [{ text: 'OK' }]);
        }
        if (password.length < 6) {
            return Alert.alert('Error', 'Password must be at least 6 characters long', [{ text: 'OK' }]);
        }
    
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // After signing up, save user data to the database
                createUser(name, username, email, userCredential.user.uid);
                // Store user UID securely
                SecureStore.setItemAsync('uid', userCredential.user.uid)
                    .then(() => {
                        console.log('UID saved');
                    })
                    .catch((error) => {
                        console.log('Error saving UID:', error.message);
                    });
    
                console.log('User signed up successfully');
                // Optionally, navigate to a different screen after successful signup
            })
            .catch((err) => {
                Alert.alert('Error', err.message, [{ text: 'OK' }]);
            });
    }
    

    return(
        <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' :'height'}
        style={styles.rootContainer}>
        <View style={styles.Container}>

        <TextInput 
            style={styles.textInputLayout}
            onChangeText={setName}
            value={name}
            placeholder='enter your name'
            
        />

        <TextInput 
            style={styles.textInputLayout}
            onChangeText={setUsername}
            value={username}
            placeholder='enter your username'
            
        />
        <TextInput 
            style={styles.textInputLayout}
            onChangeText={setEmail}
            value={email}
            placeholder='enter your email'
            keyboardType= 'email-address'
        />

        <TextInput 
            style={styles.textInputLayout}
            onChangeText={setConfirmEmail}
            value={confirmEmail}
            placeholder='Confirm your Email'
            keyboardType= 'email-address'
            
            />

        <TextInput 
            style={styles.textInputLayout}
            onChangeText={setPassword}
            value={password}
            placeholder='Enter your new Password'
            secureTextEntry={true}
        />

        <TextInput 
            style={styles.textInputLayout}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            placeholder='Confirm your Password'
            secureTextEntry={true}
        />
        <SignupButtons onCancel={onCancelHandler} onSubmit={onSubmitHandler}/>

        </View>
        </KeyboardAvoidingView>
    )
}

export default SignupScreen ; 

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: color.primaryColor300,
        justifyContent: 'center',

    },
    Container: {
        backgroundColor: color.primaryColor500,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center'
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