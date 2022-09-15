import React from 'react'
import {View, Text, Pressable} from 'react-native'
import styles from './styles'

const StyledButton = (props) => {

    // const type = props.type;
    console.warn(type);

    const {type, content, onPress } = props;
    const backgroundColor = type === 'primary' ? '#171a20cc' : '#ffffffa6';
    const textColor = type === 'primary' ? 'white' : '#171a20';

    // const content = props.content;
    // const onPress = props.onPress;


  return (
    <View style={styles.container}>
        <Pressable 
            style={[styles.button, {backgroundColor: backgroundColor}]} 
            onPress={() => onPress()}>
            <Text style={[styles.text, {color: textColor}]}>{content}</Text>
        </Pressable>
    </View>
  )
}


export default StyledButton