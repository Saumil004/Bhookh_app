import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // import icon

export default function SocialButton({ text, backgroundColor, onPress, iconName }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <Icon name={iconName} size={20} color="#fff" style={styles.icon} /> {/* Icon */}
      </View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 150, // Increase width to accommodate both icon and text
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', // Align icon and text horizontally
    marginHorizontal: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10, // Space between icon and text
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10, // Optional spacing to make sure icon doesn't touch the text
  }
});
