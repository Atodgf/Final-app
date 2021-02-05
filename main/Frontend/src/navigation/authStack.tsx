import React, { FC } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {SignUp, Login, Welcome} from '../screens'
const {Navigator, Screen} = createStackNavigator()

const AuthStack : FC = () =>{

    return(
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="welcome" component={Welcome}/>
            <Screen name="signup" component={SignUp}/>
            <Screen name="login" component={Login}/>
        </Navigator>
    )
}

export default AuthStack