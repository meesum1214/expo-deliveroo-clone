import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className="relative mr-2">
        <Image
            source={{
                uri: imgUrl
            }}
            className="w-20 h-20 rounded-md"
        />
      <Text className="absolute bottom-1 left-1 text-emerald-300 font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard