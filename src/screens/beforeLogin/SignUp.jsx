import React, {useState} from 'react';
import {View, Button, Text, TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: 'coral',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  titleText: {
    color: 'black',
    fontSize: 30,
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  signUpButton: {
    width: 300,
    height: 55,
    backgroundColor: 'black',
    margin: 10,
    marginTop: 20,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
});

const SignUp = () => {
  let [userName, setUserName] = useState('');
  let [password, setPassword] = useState('');
  let [email, setEmail] = useState('');
  let [phoneNumber, setPhoneNumber] = useState('');

  onClickSignUpButton = () => {
    alert(
      '이름 : ' +
        userName +
        '\n비밀번호 : ' +
        password +
        '\n이메일 : ' +
        email +
        '\n번호 : ' +
        phoneNumber,
    );
  };

  return (
    <>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>SignUp</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="#E6E6E6"
          onChangeText={e => setUserName(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="#E6E6E6"
          onChangeText={e => setPassword(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="#E6E6E6"
          onChangeText={e => setEmail(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          autoCapitalize="none"
          placeholderTextColor="#E6E6E6"
          onChangeText={e => setPhoneNumber(e)}
        />

        <View style={styles.signUpButton}>
          <Button
            color="white"
            title="Sign Up"
            onPress={() => onClickSignUpButton()}
          />
        </View>
      </View>
    </>
  );
};

export default SignUp;
