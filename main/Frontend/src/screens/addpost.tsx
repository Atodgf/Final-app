import React, {FC, useState} from 'react'
import { View, Text, StyleSheet,  } from 'react-native'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons'
import * as ImagePicker from 'expo-image-picker';

import {
    InputField,
    InputWrapper,
    AddImage,
    SubmitBtn,
    SubmitBtnText,
    StatusWrapper} from '../styles/addPostStyles'

const App: FC = () =>{
    const [image, setImage] = useState(null);
    const [post, setPost] = useState(null);
    
    const takePhotoFromCamera = async () => {
        let result: any = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
      
          if (!result.cancelled) {
            console.log(result)
            setImage(result.uri);
          }
      };
      
    const choosePhotoFromLibrary = async () => {
        let result: any = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
      
          if (!result.cancelled) {
            setImage(result.uri);
          }
      };

    const uploadPost= async ()=>{
        fetch("http://192.168.100.2:3000/users/uploadPost",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "username": "Admin", 
                "posts": [{
                    "post": post,
                    "postImg": image,
                  }]
         })
        })    
     }

    return (
        <View style={styles.container}>
            <InputWrapper>
                {image != null ? <AddImage source={{uri: image}} /> : null}

                <InputField
                placeholder="What's on your mind?"
                multiline
                numberOfLines={4}
                value={post}
                onChangeText={(content:any) => setPost(content)}/>

            <SubmitBtn onPress={()=> uploadPost()}>
                <SubmitBtnText>Post</SubmitBtnText>
            </SubmitBtn>

            </InputWrapper>
            <ActionButton buttonColor="rgba(231,76,60,1)">
                <ActionButton.Item 
                    buttonColor='#9b59b6' 
                    title="Take Photo" 
                    onPress={takePhotoFromCamera}>
                    <Icon name="camera-outline" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item 
                    buttonColor='#3498db' 
                    title="Choose Photo" 
                    onPress={choosePhotoFromLibrary}>
                    <Icon name="md-images-outline" style={styles.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
})