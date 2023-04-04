import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import StudentDashboard from './pages/StudentDashboard';
import Active from './pages/Active';
import { GlobalProvider } from './GlobalContext';
import ModalComponent from './components/ModalComponent';
import Login from './pages/Login';
import Missed from './pages/Missed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LecturerDashboard from './pages/LecturerDashboard';
import AllAssignments from './pages/AllAssignments';
import Submissions from './pages/Submissions';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GlobalProvider>
      <StatusBar style="auto" />
      <ModalComponent />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
          <Stack.Screen name="LecturerDashboard" component={LecturerDashboard} />
          <Stack.Screen name="AllAssignments" component={AllAssignments} />
          <Stack.Screen name="Active" component={Active} />
          <Stack.Screen name="Missed" component={Missed} />
          <Stack.Screen name="Submissions" component={Submissions} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
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
