import React from 'react';
import {View, Text, Button, StatusBar, SafeAreaView} from 'react-native';

const Login = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Login</Text>
      <Button
        title="Go to Login again"
        onPress={() => navigation.push('Login')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Login;
