import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'
import sanityClient from '../sanity'

const FeaturedRow = ({ id, title, description }) => {

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        sanityClient.fetch(`
      *[_type == "featured" && _id == $id]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
            type-> {
              name
            }
        },
      }
      `, { id }).then(data => {
            setRestaurants(data[0].restaurants);
        }).catch(err => {
            alert(err.message)
        })
    }, [id])

    return (
        <View className="">
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>

            <Text className="text-xs text-gray-500 px-4">{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                {/* RestaurantCards... */}
                {
                    restaurants.map(({ _id, image, name, rating, type, address, short_description, dishes, long, lat }) => (
                        <RestaurantCards
                            key={_id}
                            id={_id}
                            imgUrl={image}
                            title={name}
                            rating={rating}
                            genre={type?.name}
                            address={address}
                            short_description={short_description}
                            dishes={dishes}
                            long={long}
                            lat={lat}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default FeaturedRow