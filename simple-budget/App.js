import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SavedExpenseScreen from './screens/SavedExpenseScreen';
import MainScreen from './screens/MainScreen';
import AddExpenseScreen from './screens/AddExpenseScreen';
import ProfileScreen from './screens/ProfileScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import color from './constant/Color';
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from './redux/store.js';
import { getUser } from './firebase/firebase-logics.js';
import { setUser } from './redux/slice';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AfterSigninScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        animation: 'shift',
        headerTitleAlign: 'center',
        headerTintColor: '#c9d2a1',
        headerStyle: { backgroundColor: '#949494' }
      }}
    >
      <Tab.Screen
        name="home"
        component={MainScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="saved"
        component={SavedExpenseScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="heart" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="expense"
        component={AddExpenseScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="add" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}

function AuthHandler() {
  const dispatch = useDispatch(); 
  const [connected, setConnected] = useState(false);
  const [uid, setUid] = useState(null);

  useEffect(()=> {
    const checkSecureStore = async () => {
      try {
        const storedUid = await SecureStore.getItemAsync('uid')
        if (storedUid) {
          setUid(storedUid)
        }
      }catch(err) {
        console.log(`error: ${err.message}`)
      }
    }
    checkSecureStore();
  }, [])

  useEffect(()=>{

    const fetchUser = async () => {
      try {
        if (uid) {
          setConnected(true)
          const user = await getUser(uid)
          dispatch(setUser({
            user: user
          }))
        }
        else {
          setConnected(false)
        }
      } catch(err){
        console.log(`error: ${err.message}`)
      }
    }
    fetchUser();
    
  }, [uid])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_bottom',
          headerTitleAlign: 'center',
          headerTintColor: color.accentColor200,
          headerStyle: { backgroundColor: color.primaryColor500 }
        }}
      >
        {connected ? (
          <Stack.Screen
            name="after-signin"
            component={AfterSigninScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="signup" component={SignupScreen} options={{ title: 'Create an account!' }} />
            <Stack.Screen name="reset" component={ResetPasswordScreen} options={{ title: 'Reset your password!' }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Provider store={store}> 
        <AuthHandler /> 
      </Provider>
    </SafeAreaProvider>
  );
}
