import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import InputField from '../components/InputField';
import SocialButton from '../components/SocialButton';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { height, width } = Dimensions.get('window');

  return (
    <ScrollView contentContainerStyle={[styles.container, {height, width}]}>
      {/* Top Image */}
      <Image
        source={require('../assets/images/LoginWindow.png')} 
        style={styles.image}
      />

      {/* Welcome Text */}
      <Text style={styles.heading}>Welcome back!</Text>
      <Text style={styles.subHeading}>Log in to your existing account</Text>

      {/* Input Fields */}
      <InputField
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <InputField
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOG IN</Text>
      </TouchableOpacity>

      {/* Social Buttons */}
      <Text style={styles.orText}>Or connect using</Text>
      <View style={styles.socialButtonsContainer}>
        <SocialButton
          text="Google"
          backgroundColor="#ff640d"
          iconName="google"
          onPress={() => console.log('Google Login')}
        />
        <SocialButton
          text="Facebook"
          backgroundColor="#ff640d"
          iconName="facebook"
          onPress={() => console.log('Facebook Login')}
        />
      </View>

      {/* Sign Up */}
      <Text style={styles.signUpText}>
        Don’t have an account?{' '}
        <Text style={styles.signUpLink}>Sign Up</Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f6f6f7',
    justifyContent: 'center',
  },
  
  image: {
    width: 240,
    height: 240,
    alignSelf: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subHeading: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#ff6600',
    marginBottom: 20,
    fontWeight: 'bold'
  },
  loginButton: {
    backgroundColor: '#ff6600',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50, 
    paddingVertical: 16,
    alignSelf: 'center',  
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#666',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 1,
    flex:1
  },
  signUpText: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 20
  },
  signUpLink: {
    color: '#ff6600',
    fontWeight: 'bold',
  },
});
