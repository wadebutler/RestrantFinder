import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer tjZbfshjirL_5qkbZeNgomEhEIa4YJcy-Y1QSJpm4aqJRMqjc4Mzf9MMjZq8etJzScsuXk_yEaXAvnYj9C7is0Ca9OXna527LACEhQsyVxeERbIvnSf8bvO336DyXnYx'
    }
})