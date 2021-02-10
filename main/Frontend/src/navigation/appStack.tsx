import React, { FC } from 'react'
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {Home, Chat, Profile, Addpost, Messages} from '../screens'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = (props:any) => (
    <Stack.Navigator>
      <Stack.Screen
        name="Best Social Net"
        component={Home}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#2e64e5',
            fontSize: 18,
          },
          headerStyle: {
            shadowColor: '#fff',
            elevation: 0,
          },
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <FontAwesome5.Button
                name="plus"
                size={22}
                backgroundColor="#fff"
                color="#2e64e5"
                onPress={() => props.navigation.navigate('AddPost')}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="AddPost"
        component={Addpost}
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#2e64e515',
            shadowColor: '#2e64e515',
            elevation: 0,
          },
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <View style={{marginLeft: 15}}>
              <Ionicons name="arrow-back" size={25} color="#2e64e5" />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );

const MessageStack = (props:any) => (
    <Stack.Navigator>
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen
        name="Chat"
        component={Chat}
      />
    </Stack.Navigator>
  );
  
const AppStack : FC = () =>{
    
    return (
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#2e64e5',
          }}>
          <Tab.Screen
            name="Home"
            component={FeedStack}
            options={({route}) => ({
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="home-outline"
                  color={color}
                  size={size}
                />
              ),
            })}
          />
          <Tab.Screen
            name="Messages"
            component={MessageStack}
            options={() => ({
              tabBarIcon: ({color, size}) => (
                <Ionicons
                  name="chatbox-ellipses-outline"
                  color={color}
                  size={size}
                />
              ),
            })}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({color, size}) => (
                <Ionicons name="person-outline" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      );
};


export default AppStack