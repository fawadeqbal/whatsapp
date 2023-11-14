import React from 'react';
import {FlatList } from 'react-native';
import ChatListItem from '../ChatListItem/index';
import {data} from '../../../data/data';

export default function ChatList() {
  return (
      <FlatList 
        data={data}
        renderItem={({ item }) => (
          <ChatListItem {...item} />
        )}
      />
  );
}


