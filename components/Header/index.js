import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

const Header = () =>{

    return(
        // Header was not functioning well with the small iphone 7 screen, learn responsive design with react native
        
        <View styles={styles.container}>
            {/* <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
            <Image style={styles.menu} source={require('../../assets/images/menu.png')} /> */}
        </View>
    )
}

export default Header