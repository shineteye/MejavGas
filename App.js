import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import DashboardScreen from './screens/DashboardPage';
import LauchScreen from './screens/LaunchPage';
import LoginScreen from './screens/LoginPage';
import SignUpScreen from './screens/SignUpPage';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Launchpage"
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

    </NavigationContainer>
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
