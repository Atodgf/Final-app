import React, {FC} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { AuthContext } from '../context/context'

import {Container} from '../styles/feedStyles'

import PostCard from '../components/postcard'

const Posts = [
    {
      id: '1',
      userName: 'Jenny Doe',
      userImg: require('../img/home.jpg'),
      postTime: '4 mins ago',
      post:
        'Hey there, this is my test for a post of my social app in React Native.',
      postImg: require('../img/details.jpg'),
      liked: true,
      likes: '14',
      comments: '5',
    },
    {
      id: '2',
      userName: 'John Doe',
      userImg: require('../img/register.jpg'),
      postTime: '2 hours ago',
      post:
        'Hey there, this is my test for a post of my social app in React Native.',
      postImg: 'none',
      liked: false,
      likes: '8',
      comments: '0',
    },
    {
      id: '3',
      userName: 'Ken William',
      userImg: require('../img/details.jpg'),
      postTime: '1 hours ago',
      post:
        'Hey there, this is my test for a post of my social app in React Native.',
      postImg: require('../img/register.jpg'),
      liked: true,
      likes: '1',
      comments: '0',
    },
  ];

const App: FC = () =>{


    return (
        <Container>
            <FlatList
                data={Posts}
                renderItem={({item}) => <PostCard item={item} />}
                keyExtractor={item=>item.id}
                showsVerticalScrollIndicator={false}/>
        </Container>
    )
}

export default App