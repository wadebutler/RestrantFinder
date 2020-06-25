import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Linking } from 'react-native';
import yelp from '../api/yelp';
import { Feather } from '@expo/vector-icons';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log(result)

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    }
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null
    }

    return (
        <View>
            <View style={style.info}>
                <Text style={style.one}>{result.name}</Text>
                <Text style={style.two}>{result.location.address1}</Text>
                <Text
                    onPress={() => { Linking.openURL(`tel:${result.display_phone}`)}} 
                    style={style.two}
                >
                    <Feather name="phone-forwarded" size={30} />
                    <Text>  </Text>
                    {result.display_phone}
                </Text>
            </View>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={style.image} source={{ uri: item }} />
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    info: {
        marginBottom: 10,
    },  
    one: {
        fontSize: 30,
        marginVertical: 5,
        marginLeft: 10,
    },
    two: {
        fontSize: 20,
        marginVertical: 5,
        marginLeft: 10,
    },  
    image: {
        height: 200,
        width:300,
        marginLeft: 10,
        borderRadius: 5,
    },
    container: {
        marginLeft: 10,
        
    }
});

export default ResultsShowScreen;