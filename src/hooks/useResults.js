import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';
import * as Location from 'expo-location';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')
    const [location, setLocation] = useState(null);

    // const getLocation = async () => {
    //     let location = await Location.getCurrentPositionAsync({});
    //     setLocation(location);
    //     // console.log(location)
    //     const lat = location.coords.latitude;
    //     const long = location.coords.longitude;
    //     console.log(lat, long)
    // }

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: `${location.coords.latitude}, ${location.coords.longitude}`,
                }
            });
            setResults(response.data.businesses);
        } catch (e) {
            setErrorMessage("Something went wrong")
        }
    }

    useEffect(() => {
        (async () => {
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
        searchApi('pasta')
    });

    // useEffect(() => {
    //     // getLocation()
    //     searchApi('pasta')
    // }, [])

    return [searchApi, results, errorMessage]
}