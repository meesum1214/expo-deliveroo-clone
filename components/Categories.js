import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient, { urlFor } from '../sanity'

const Categories = () => {

    const [categories, setCategories] = useState()

    useEffect(() => {
        sanityClient.fetch(`
      *[_type == "category"]
      `).then(data => {
            setCategories(data);
        }).catch(err => {
            alert(err.message)
        })
    }, [])


    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {
                categories?.map(({ _id, image, title }) => (
                    <CategoryCard
                        key={_id}
                        title={title}
                        imgUrl={urlFor(image).width(200).url()}
                    />
                ))
            }
        </ScrollView>
    )
}

export default Categories