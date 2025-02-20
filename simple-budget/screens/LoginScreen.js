import { useState, useEffect } from 'react';
import { Image, KeyboardAvoidingView, Platform, StyleSheet, TextInput, View } from 'react-native';
import LoginButtons from '../components/LoginButtons';
import logo from '../assets/image/simple-budget-logo-2.webp';
import color from '../constant/Color';
import { ref } from 'firebase/database';
import { auth, database } from '../firebase/config';
import * as SecureStore from 'expo-secure-store';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const db = database;
  const profilesRef = ref(db, 'profiles');

  useEffect(() => {
    navigation.setOptions({ title: 'Simple Budget' });
  }, [navigation]);

  const loginHandler = async () => {

    try {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            userCredential.user.getIdToken()
            .then((idToken) => {
                SecureStore.setItemAsync('uid', idToken);
            })
        })
        .catch((err) => {
            console.log(`error: ${err.message}`);
        })
    } catch(err) {
        console.log(`Error: ${err.message}`);
    }
//     try {
//       const snapshot = await get(profilesRef);
//       if (snapshot.exists()) {
//         const profiles = snapshot.val();
//         console.log(`list of profiles: ${profiles}`)
//         const user = Object.values(profiles).filter((user) => user.email === email && user.password === password)
//         if (user) {
//             console.log(`user: ${user.name}`)
//             SecureStore.setItemAsync('uid', user.uid);
//         }
//        else {
//         console.log('No data available');
//       }
//     }
//  } catch (error) {
//       console.log('Error login ', error.message);
//     }
};

  const signupHandler = () => {
    navigation.navigate('signup');
  };

  const resetPasswordHandler = () => {
    navigation.navigate('reset');
  };

  return (
    <KeyboardAvoidingView style={styles.rootScreen} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Image style={styles.image} source={logo} />
      <View style={styles.container}>
        <TextInput
          style={styles.textInputLayout}
          onChangeText={setEmail}
          value={email}
          placeholder='Username'
        />
        <TextInput
          style={styles.textInputLayout}
          onChangeText={setPassword}
          value={password}
          placeholder='Password'
          secureTextEntry={true}
        />
        <LoginButtons login={loginHandler} signup={signupHandler} resetPassword={resetPasswordHandler} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: color.primaryColor300,
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
    backgroundColor: color.primaryColor500,
    alignItems: 'center',
    borderWidth: 1,
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
