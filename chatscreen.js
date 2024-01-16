import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import {GiftedChat} from 'react-native-gifted-chat'
import {Router} from 'express'
import {useRoute} from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'

const Chatscreen = () => { 
    const [messages, setMessages] = useState([])
    const route=useRoute()
  useEffect(() => {
    setMessages([
      {
        _id: route.params.data.myId,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = messageArray => {
    console.log(messageArray);
    const msg=messageArray[0];
    const myMsg={...msg,senderId: route.params.data.myId,recieverId:route.params.data.userId};
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, myMsg));
  };
  return (
    <View style={{flex:1}}>
      <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
    </View>
  );
}

export default Chatscreen