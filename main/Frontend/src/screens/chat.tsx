import React, { FC, useState, useCallback, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const App: FC = (props:any) =>{
    const [messages, setMessages] = useState<any>([]);

    useEffect(() => {
      setMessages([
        {
          _id: 1,
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
  
    const onSend = useCallback((messages = []) => {
      setMessages((previousMessages:any) => GiftedChat.append(previousMessages, messages))
    }, [])

    const renderSend = (props:any) => {
        return (
          <Send {...props}>
            <View>
              <MaterialCommunityIcons
                name="send-circle"
                style={{marginBottom: 5, marginRight: 5}}
                size={32}
                color="#2e64e5"
              />
            </View>
          </Send>
        );
      };

    const scrollToBottomComponent = () => {
        return(
          <FontAwesome name='angle-double-down' size={22} color='#333' />
        );
      }  

    const renderBubble = (props:any) =>{
        return (
            <Bubble
        {...props}
        wrapperStyle={{
            right: {
                backgroundColor: '#2e64e5'
            }
        }}
        textStyle={{
            right: {
                color: '#fff'
            }
        }}/>
        )
        
    }
    return (
        <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
    )
}



export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})