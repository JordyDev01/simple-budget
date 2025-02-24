import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import { Provider, useSelector } from 'react-redux';
import { store } from './redux/store.js';



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
  
  const selectedUser = useSelector((state) => state.user.user);
  console.log(`selected user? ${selectedUser}`)


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
        {selectedUser ? (
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
