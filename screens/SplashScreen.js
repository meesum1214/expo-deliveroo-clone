import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation()
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('Home')
      }, 2000)
    }, [])
    
    return (
        <SafeAreaView className="pt-8 flex-1 justify-center items-center bg-primary">
            <Animatable.Image
                source={require('../assets/splashScreen.gif')}
                animation="slideInUp"
                iterationCount={1}
                className="h-44 w-52"
            />

            <Progress.Circle size={40} indeterminate={true} color="white" className="absolute bottom-10" />
        </SafeAreaView>
    )
}

export default SplashScreen