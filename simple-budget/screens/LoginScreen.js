import { useState, useEffect } from 'react';
import { Image, KeyboardAvoidingView, Platform, StyleSheet, TextInput, View } from 'react-native';
import LoginButtons from '../components/LoginButtons';
import logo from '../assets/image/simple-budget-logo-2.webp';
import color from '../constant/Color';
import { auth } from '../firebase/config';
import * as SecureStore from 'expo-secure-store';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { autoSignin, getUser } from '../firebase/firebase-logics';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setUser } from '../redux/slice';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    navigation.setOptions({ title: 'Simple Budget' });
  }, [navigation]);

  // Auto-login logic
  useEffect(() => {
    const autoLogin = async () => {
      try {
        const savedUid = await SecureStore.getItemAsync('uid');
        const savedEmail = await SecureStore.getItemAsync('email');
        const savedPassword = await SecureStore.getItemAsync('password');

        if (savedEmail && savedPassword) {
          const isLogged = await autoSignin(auth, savedEmail, savedPassword);

          if (isLogged && savedUid) {
            const userData = await getUser(savedUid);
            if (userData) {
              dispatch(setUser({ user: userData }));
            } else {
              console.log('No user found in SecureStore');
            }
          }
        }
      } catch (error) {
        console.log('Auto-login error:', error.message);
      }
    };

    autoLogin();
  }, [dispatch]);

  // Redirect when user is authenticated
  useEffect(() => {
    if (user) {
      navigation.replace("after-signin"); // Navigate once user is set
    }
  }, [user, navigation]);

  // Manual login logic
  const loginHandler = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const { uid } = userCredential.user;

      await SecureStore.setItemAsync('uid', uid);
      await SecureStore.setItemAsync('email', email);
      await SecureStore.setItemAsync('password', password);

      console.log('User info saved!');
      const userData = await getUser(uid);
      
      if (userData) {
        dispatch(setUser({ user: userData }));
      }
    } catch (error) {
      console.log('Login error:', error.message);
    }
  };

  const signupHandler = () => navigation.navigate('signup');
  const resetPasswordHandler = () => navigation.navigate('reset');

  return (
    <KeyboardAvoidingView style={styles.rootScreen} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Image style={styles.image} source={logo} />
      <View style={styles.container}>
        <TextInput
          style={styles.textInputLayout}
          onChangeText={setEmail}
          value={email}
          placeholder='Email'
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textInputLayout}
          onChangeText={setPassword}
          value={password}
          placeholder='Password'
          secureTextEntry
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


// import { useState, useEffect } from 'react';
// import { Image, KeyboardAvoidingView, Platform, StyleSheet, TextInput, View } from 'react-native';
// import LoginButtons from '../components/LoginButtons';
// import logo from '../assets/image/simple-budget-logo-2.webp';
// import color from '../constant/Color';
// import { auth } from '../firebase/config';
// import * as SecureStore from 'expo-secure-store';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { autoSignin } from '../firebase/firebase-logics';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../redux/slice';
// import { getUser } from '../firebase/firebase-logics';

// const LoginScreen = ({ navigation }) => {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  

//   useEffect(() => {
//     navigation.setOptions({ title: 'Simple Budget' });
//   }, [navigation]);

//   useEffect(() => {
//     const autoLogin = async () => {
//       const savedUid = await SecureStore.getItemAsync('uid');
//       const savedEmail = await SecureStore.getItemAsync('email');
//       const savedPassword = await SecureStore.getItemAsync('password');

//       const isLogged = await autoSignin(auth, savedEmail, savedPassword)

//       if (isLogged) {
//         const user = await getUser(savedUid)
//         if (user) {
//           dispatch(setUser({
//             user : user
//           }))
//           console.log(`is logged? ${isLogged}`)
//           console.log(`user? ${JSON.stringify(user)}`)
//         }
//         else {
//           console.log(`no user saved in Secure store`)
//         }
//       }
//     }
//     autoLogin()
//   },[dispatch])

//   const loginHandler = async () => {

//     try {
//         signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//              SecureStore.setItemAsync('uid', userCredential.user.uid)
//              .then(() => {
//               SecureStore.setItemAsync('email', email)
//               .then(() => {
//                 SecureStore.setItemAsync('password', password)
//                 .then(() => console.log(`user info saved!`))
//               })
//              })
//         })
//         .catch((err) => {
//             console.log(`error: ${err.message}`);
//         })
//     } catch(err) {
//         console.log(`Error: ${err.message}`);
//     }
// //     try {
// //       const snapshot = await get(profilesRef);
// //       if (snapshot.exists()) {
// //         const profiles = snapshot.val();
// //         console.log(`list of profiles: ${profiles}`)
// //         const user = Object.values(profiles).filter((user) => user.email === email && user.password === password)
// //         if (user) {
// //             console.log(`user: ${user.name}`)
// //             SecureStore.setItemAsync('uid', user.uid);
// //         }
// //        else {
// //         console.log('No data available');
// //       }
// //     }
// //  } catch (error) {
// //       console.log('Error login ', error.message);
// //     }
// };

//   const signupHandler = () => {
//     navigation.navigate('signup');
//   };

//   const resetPasswordHandler = () => {
//     navigation.navigate('reset');
//   };

//   return (
//     <KeyboardAvoidingView style={styles.rootScreen} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
//       <Image style={styles.image} source={logo} />
//       <View style={styles.container}>
//         <TextInput
//           style={styles.textInputLayout}
//           onChangeText={setEmail}
//           value={email}
//           placeholder='Username'
//         />
//         <TextInput
//           style={styles.textInputLayout}
//           onChangeText={setPassword}
//           value={password}
//           placeholder='Password'
//           secureTextEntry={true}
//         />
//         <LoginButtons login={loginHandler} signup={signupHandler} resetPassword={resetPasswordHandler} />
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   rootScreen: {
//     flex: 1,
//     backgroundColor: color.primaryColor300,
//   },

//   image: {
//     height: '50%',
//     width: '70%',
//     borderWidth: 1,
//     borderRadius: 40,
//     borderColor: 'black',
//     marginTop: 20,
//     marginBottom: 'auto',
//     alignSelf: 'center',
//   },

//   container: {
//     backgroundColor: color.primaryColor500,
//     alignItems: 'center',
//     borderWidth: 1,
//   },

//   textInputLayout: {
//     height: 40,
//     width: '70%',
//     backgroundColor: '#ffffff',
//     margin: 6,
//     marginTop: 15,
//     borderWidth: 1,
//     borderRadius: 5,
//   },
// });
