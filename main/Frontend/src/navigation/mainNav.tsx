import React, { FC, useState } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AppStack from './appStack'
import AuthStack from './authStack'

const MainNav : FC = () =>{
    const [user, setUser] = useState(null)
    return (
        <NavigationContainer>
            {user !==null ? <AppStack/> : <AuthStack/>}
        </NavigationContainer>
    )
}

export default MainNav