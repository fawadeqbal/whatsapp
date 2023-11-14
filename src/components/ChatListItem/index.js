import React from 'react';
import { View,StyleSheet, Text, Image } from 'react-native';
const ChatListItem = ({ name, image, time, lastMessage }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.avatar} />
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text numberOfLines={1} style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <Text numberOfLines={2} style={styles.subTitle}>{lastMessage}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contentContainer: {
    flex: 1,
    borderBottomWidth:StyleSheet.hairlineWidth,
    borderBottomColor:'lightgrey',
    marginBottom:1
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
   },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    color: '#888',
  },
  subTitle: {
    color: '#777',
  },
});
export default ChatListItem;
