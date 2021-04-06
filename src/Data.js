import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        axios.get(url)
        .then(res => {
            setData(res.data);
            setLoading(false);
        })
        .catch(err => {console.log(err)})
    }, []);
    return {data, loading};
}

export default useData;