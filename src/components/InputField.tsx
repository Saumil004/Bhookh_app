import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';

export default function InputField({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
}) {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
        placeholderTextColor="#aaa"  // Ensure the placeholder is visible
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setIsSecure(!isSecure)}
        >
          <Text style={styles.icon}>{isSecure ? '👁️' : '🙈'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    alignSelf: 'center',
    width: 300,
    backgroundColor: 'white'
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#000',  // Ensure the text color is black or any other color that suits the design
  },
  iconContainer: {
    paddingHorizontal: 8,
  },
  icon: {
    fontSize: 18,
    color: '#666',
  },
});
