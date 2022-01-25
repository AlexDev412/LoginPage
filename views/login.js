import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

export default class Login extends Component {
  onPress() {
      alert('hello!')
  }

  
  render() {
    const image = require ('../assets/Background/Background.png')
    return (
      <ImageBackground  source={require ('../assets/Background/Background.png')} style={styles.image}>
        
        <View style={styles.bottom}>
        <TextInput style={styles.input} placeholder='Email'></TextInput>
        <TextInput style={styles.input} secureTextEntry={true} placeholder='Password'></TextInput>
        <View style={styles.logAndPassword}>
          <Text style={styles.password}>Forget Password ?</Text>
          <Button
            title="Login"
            type="outline"
            buttonStyle={{
              justifyContent: 'space-between',
              margin: 8,
              borderWidth: 1,
              width: 70,
              borderRadius: 10,
              borderColor: '#f0f8ff',
            }}
            titleStyle={{
              color: 'white',
              textAlign: 'center'
           }}
          />
        </View>
        <View  style={styles.otherLogin}>
            <Button
            buttonStyle={{
              width: 45,
              height: 45,
              backgroundColor: 'white'}}
            containerStyle={{
              marginHorizontal: "1%",
              marginTop: "10%",
            }}
            />

            <Button
            buttonStyle={{
              width: 45,
              height: 45,
              backgroundColor: 'white'}}
            containerStyle={{
              marginHorizontal: "1%",
              marginTop: "10%",
            }}
            />

            <Button
            buttonStyle={{
              width: 45,
              height: 45,
              backgroundColor: 'white'}}
            containerStyle={{
              marginHorizontal: "1%",
              marginTop: "10%",
            }}
            />
        </View>
        
        </View>
  
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  input: {
    borderWidth: 1,
    borderColor: '#f0f8ff',
    padding: 8,
    margin: 8,
    borderRadius: 10,
    width: 220
  },
  password: {
    color: 'white',
    fontSize: 12,
  },
  logAndPassword: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bottom: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 100
  },
  otherLogin: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    flexWrap: 'wrap',
  }
});
