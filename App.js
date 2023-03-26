import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import LoginProvider from './contexts/loginProvider';
import { UserContextProvider } from './contexts/userContext';
import DashboardScreen from './screens/DashboardPage';
import LauchScreen from './screens/LaunchPage';
import LoginScreen from './screens/LoginPage';
import SignUpScreen from './screens/SignUpPage';
const Stack = createNativeStackNavigator();


export default function App() {

  const StackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="LaunchPage"
          component={LauchScreen}
          options={{ title: 'Welcome' }} />
        <Stack.Screen
          name="SignUpPage"
          component={SignUpScreen}
          options={{ title: 'Sign up' }} />
        <Stack.Screen
          name="LoginPage"
          component={LoginScreen}
          options={{ title: 'Login' }} />
        <Stack.Screen
          name="DashboardPage"
          component={DashboardScreen}
          options={{ title: 'Order' }} />
      </Stack.Navigator>
    )
  }
  return (
    <LoginProvider>
      <UserContextProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </UserContextProvider>
    </LoginProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
