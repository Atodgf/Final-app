import React, {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Card, UserInfo, UserImg, UserName, UserInfoText, PostTime, PostText, PostImg, InteractionWrapper, Interaction, InteractionText, Divider} from '../styles/feedStyles'

const PostCard = (props: {item :any}) => {
    const [isActive, setIsActive] = useState<boolean | null>(false)
    const likeIcon = props.item.liked ? 'heart' : 'heart-outline'
    const likeIconColor = props.item.liked ? 'rgb(0, 180, 216)' : 'rgb(249, 65, 68)'

    return(
        <Card>
                <UserInfo>
                    <UserImg source={props.item.userImg}/>
                    <UserInfoText>
                        <UserName>{props.item.userName}</UserName>
                        <PostTime>{props.item.postTime}</PostTime>
                    </UserInfoText>
                </UserInfo>
                <PostText>{props.item.post}</PostText>
                {props.item.postImg !== 'none' ? <PostImg source={props.item.postImg}/> : <Divider/>}
                <InteractionWrapper>
                    <Interaction active = {isActive} onPress = {()=> {setIsActive(!isActive)}}>
                        <Ionicons name={likeIcon} size={25} color={likeIconColor}/>
                        <InteractionText active = {props.item.liked}>{props.item.likes} Likes</InteractionText>
                    </Interaction>
                    <Interaction>
                        <Ionicons name="md-chatbubble-outline" size={25}/>
                        <InteractionText>{props.item.comments} Comments</InteractionText>
                    </Interaction>
                </InteractionWrapper>
            </Card>
    )
}

export default PostCard