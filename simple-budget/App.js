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

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {

  function AfterSigninScreen() {
    return (
      <Tab.Navigator screenOptions={{
        animation: 'fade',
        defaultNavigationOptions: {
          headerTitleAlign: 'center',
        }
        
      }}>
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

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          animation: 'shift'
        }}>
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="signup" component={SignupScreen} />
          <Stack.Screen name='reset' component={ResetPasswordScreen} />
          <Stack.Screen name="after-signin" component={AfterSigninScreen} options={{
            headerShown: false
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
