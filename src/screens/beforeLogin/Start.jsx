import React from 'react';
import {
  View,
  Text,
  Button,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const styles = StyleSheet.create({
  loginButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'coral',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  signUpButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
  },
  titleText: {
    color: 'black',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 30,
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
});

const Start = ({navigation}) => {
  return (
    <SafeAreaView>
      {/* <ImageBackground
        source={require('../../asset/Home.png')}
        style={styles.bgImage}
      /> */}
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Pixyverse</Text>
      </View>

      <View style={styles.loginButton}>
        <Button
          title="Go to Login"
          color="white"
          onPress={() => navigation.navigate('Login')}
        />
      </View>

      <View style={styles.signUpButton}>
        <Button
          title="Go to SignUp"
          color="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Start;
