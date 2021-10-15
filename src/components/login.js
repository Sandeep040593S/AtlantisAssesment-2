import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import ToDoList from './toDoList';
import {GoogleSignin} from '@react-native-community/google-signin';
import {Button, StyleSheet, Text, View} from 'react-native';

const Login = props => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '822258040588-8proloak3hmb6mbpmuuj0oguepbct3u4.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
   
    const {idToken} = await GoogleSignin.signIn();

    
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  
    return auth().signInWithCredential(googleCredential);
  }

  auth().onAuthStateChanged(user => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });

  if (authenticated) {
    props.navigation.navigate('ToDoList');
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title} onPress={onGoogleButtonPress}>
        Click here for Google Sign In
      </Text>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 30,
  },
});
