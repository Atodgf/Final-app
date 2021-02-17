import React, {FC} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import {
    Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection,
  } from '../styles/messageStyles';

const Messages = [
    {
      id: '1',
      userName: 'User1',
      userImg: require('../img/home.jpg'),
      messageTime: '4 mins ago',
      messageText:
        'Hello developer',
    },
    {
      id: '2',
      userName: 'User2',
      userImg: require('../img/register.jpg'),
      messageTime: '2 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '3',
      userName: 'User3',
      userImg: require('../img/details.jpg'),
      messageTime: '1 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '4',
      userName: 'User4',
      userImg: require('../img/home.jpg'),
      messageTime: '1 day ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '5',
      userName: 'User5',
      userImg: require('../img/register.jpg'),
      messageTime: '2 days ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
  ];



const App: FC = (props:any) =>{

    
    return (
        <Container>
            <FlatList
            data={Messages}
            keyExtractor={item=>item.id}
            renderItem={({item})=>(
                <Card onPress={()=> props.navigation.navigate('Chat', {userName: item.userName})}>
                    <UserInfo>
                        <UserImgWrapper>
                            <UserImg source={item.userImg}/>
                        </UserImgWrapper>
                        <TextSection>
                            <UserInfoText>
                                <UserName>{item.userName}</UserName>
                                <PostTime>{item.messageTime}</PostTime>
                            </UserInfoText>
                            <MessageText>{item.messageText}</MessageText>
                        </TextSection>
                    </UserInfo>
                </Card>
            )}/>
        </Container>
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