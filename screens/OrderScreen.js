import { View, Text, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectOrderItems } from '../features/orderSlice'
import { urlFor } from '../sanity'
import Currency from 'react-currency-formatter'

const OrderScreen = () => {

    const orders = useSelector(selectOrderItems)
    console.log(orders)
    return (
        <View className="p-4">
            <View>
                <Text className="font-bold text-lg">Order Detail</Text>
                {
                    orders.map((order, index) => (
                        <View className="flex-row justify-between items-center mt-4 bg-white rounded-md p-2" key={index}>
                            <View className="flex-row items-center">
                                <Image
                                    source={{
                                        uri: urlFor(order.image).url(),
                                    }}
                                    className="h-20 w-20 rounded-md"
                                />
                                <View className="ml-4">
                                    <Text className="font-semibold text-lg">{order.name}</Text>
                                </View>
                            </View>
                            <View className="flex-row items-center">
                                <Currency quantity={order.price} currency="GBP" />
                                <Text className="text-gray-500">x{order.quantity}</Text>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

export default OrderScreen