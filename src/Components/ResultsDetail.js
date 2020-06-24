import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultsDetail = ({result}) => {
    return (
        <View style={style.container}>
            <Image style={style.image} source={{ uri: result.image_url }} />
            <Text style={style.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginLeft: 15,
        // marginVertical: 15,
    },
    image: {
        width: 250,
        height: 200,
        borderRadius: 5,
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',
    }
});

export default ResultsDetail;