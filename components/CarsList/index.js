import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import cars from './cars';
import CarItem from '../CarItem';


const CarsList = (props) => {

    return(
        <View styles={styles.container}>
            <FlatList 
                data={cars}
                renderItem={({item}) => <CarItem car={item} />}
                snapToAlignment={'start'}
                //speed of animation
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                //remove the indicator
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default CarsList;