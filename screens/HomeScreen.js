import { View, Text, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';

const HomeScreen = () => {

    const navigation = useNavigation();

    const [featuredCategories, setFeaturedCategories] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "featured"]{
            ...,
            restaurants[]->{
              ...,
              dishes[]->
            },
          }
        `).then(data => {
            setFeaturedCategories(data)
        }).catch(err => {
            alert(err.message)
        })
    }, [])

    return (
        <SafeAreaView className="pb-40">
            <View className="bg-white pb-4">
                <View className="pt-9 pb-4 space-x-2 flex-row items-center px-4">
                    <Image
                        source={require('../assets/profile.jpg')}
                        className="w-7 h-7 rounded-full bg-gray-300 p-4"
                    />
                    <View className="flex-1">
                        <Text className="text-xs text-gray-400 font-bold">Deliver Now!</Text>
                        <View className="flex-row items-center">
                            <Text className="text-xl font-bold">Current Location</Text>
                            <ChevronDownIcon size={20} color="#00CCBB" />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <UserIcon size={35} color="#00CCBB" />
                    </TouchableOpacity>
                </View>

                <View className="flex-row justify-between items-center px-4">
                    <View className="flex-1 flex-row items-center p-2 mr-2 bg-gray-200">
                        <MagnifyingGlassIcon color="#00CCBB" />
                        <TextInput
                            placeholder='Restaurants and cuisines'
                            keyboardType='default'
                        />
                    </View>
                    <AdjustmentsVerticalIcon color="#00CCBB" />
                </View>
            </View>

            <ScrollView>
                {/* Categories */}
                <Categories />

                {/* Featured Rows */}
                {
                    featuredCategories.map(({ _id, name, short_description, featuredCategory }) => (
                        <FeaturedRow
                            key={_id}
                            id={_id}
                            title={name}
                            description={short_description}
                        />
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen