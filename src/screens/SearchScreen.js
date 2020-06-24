import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>we have found {results.length} results</Text>
        </View>
    )
}

const style = StyleSheet.create({});

export default SearchScreen;