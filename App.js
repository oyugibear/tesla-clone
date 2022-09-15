import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './components/carItem';

export default function App() {
  return (
    <View style={styles.container}> 
      <CarItem 
        name={'Model X'} 
        tagline={'Order Online For'} 
        taglineCTA={'Touchless delivery'} 
        image={require('./assets/images/ModelX.jpeg')}/>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
