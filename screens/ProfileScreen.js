import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon, ChevronRightIcon, EllipsisVerticalIcon, HeartIcon, PencilSquareIcon, StarIcon, UserPlusIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="pt-8 bg-primary flex-1">
            <View className="h-[20%]  flex-row justify-between items-start pt-4 px-4">
                <View className="flex-1 items-start">
                    <TouchableOpacity
                        className="p-2 bg-gray-100 rounded-full"
                        onPress={() => navigation.goBack()}
                    >
                        <ArrowLeftIcon color="#00CCBB" size={20} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    className="p-2 bg-gray-100 rounded-full mx-2"
                // onPress={() => navigation.goBack()}
                >
                    <PencilSquareIcon color="#00CCBB" size={20} />
                </TouchableOpacity>

                <TouchableOpacity
                    className="p-2 bg-gray-100 rounded-full"
                // onPress={() => navigation.goBack()}
                >
                    <EllipsisVerticalIcon color="#00CCBB" size={20} />
                </TouchableOpacity>
            </View>

            <View className="bg-white h-[80%] rounded-t-3xl">
                <View className="items-center -m-[65px] mb-4">
                    <View className="w-[134px] h-[134px] bg-primary justify-center items-center rounded-full">
                        <Image
                            source={require('../assets/profileImg.jpg')}
                            className="w-32 h-32 rounded-full bg-gray-300 p-4"
                        />
                    </View>
                    <Text className="text-3xl font-bold mt-6">Syed Salman</Text>
                    <Text className="text-2xl text-gray-500 mt-2">@syedsalman86</Text>
                    <Text className="text-lg text-gray-500 mt-2">Member Since: 04 Nov 2022</Text>
                </View>

                <ScrollView>
                    <View className="bg-gray-100 p-5 mb-4">
                        <Text className="text-xl text-gray-500">Your Location</Text>
                        <View className="flex-row justify-between">
                            <Text className="text-lg">Rawalpindi</Text>
                            <ArrowRightIcon color="#00CCBB" size={20} />
                        </View>
                    </View>

                    <View className="mb-6">
                        <Text className="text-2xl px-5 font-semibold">My Activities</Text>
                        <View className="p-5 border-b border-gray-300 flex-row items-center space-x-3">
                            <HeartIcon color="#00CCBB" size={20} />
                            <Text className="text-lg">Brands Your Follow (0)</Text>
                        </View>
                        <View className="p-5 border-b border-gray-300 flex-row items-center space-x-3">
                            <StarIcon color="#00CCBB" size={20} />
                            <Text className="text-lg">Reviews (0)</Text>
                        </View>
                    </View>

                    <View>
                        <Text className="text-2xl px-5 font-semibold">My Cnnections</Text>
                        <View className="p-5 border-b border-gray-300 flex-row items-center space-x-3">
                            <UserPlusIcon color="#00CCBB" size={20} />
                            <Text className="text-lg">Followers (0)</Text>
                        </View>
                        <View className="p-5 border-b border-gray-300 flex-row items-center space-x-3">
                            <UserPlusIcon color="#00CCBB" size={20} />
                            <Text className="text-lg">Following (0)</Text>
                        </View>
                        <View className="p-5 border-b border-gray-300 flex-row items-center space-x-3">
                            <UserPlusIcon color="#00CCBB" size={20} />
                            <Text className="text-lg">Invited Friends (0)</Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('OrderScreen')}
                    >
                        <View className="p-5 border-b border-gray-300 flex-row items-center">
                            <View className="flex-1 flex-row items-center space-x-3">
                                <UserPlusIcon color="#00CCBB" size={20} />
                                <Text className="text-lg">Your Orders</Text>
                            </View>
                            <ChevronRightIcon color="#00CCBB" size={20} />
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen