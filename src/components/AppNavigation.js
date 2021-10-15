import ToDoList from '../components/toDoList';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ListOfItem from '../components/listOfItem';
import Login from '../components/login';
const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#FFF'},
          gestureEnabled: false,
        }}
        initialRouteName={'ToDoList'}>
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'ToDoList'} component={ToDoList} />
        <Stack.Screen name={'ListOfItem'} component={ListOfItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
