import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={style.backgroundStyle}>
            <Feather name="search" style={style.iconStyle} />
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={style.input} 
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const style = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#e0dede',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: "row"
    },
    input: {
        flex: 1,
        padding: 8,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 40,
        alignSelf: "center",
        marginHorizontal: 10,
    }
});

export default SearchBar;