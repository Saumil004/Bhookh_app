import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>

        <LoginScreen/>

      </ScrollView>
    </SafeAreaView>
  )
}

export default App