import { StyleSheet, View } from 'react-native'
import React from 'react'
import ChatList from './src/components/ChatList/index.js'

const App = () => {
  return (
    <View style={styles.container}>
      <ChatList/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})