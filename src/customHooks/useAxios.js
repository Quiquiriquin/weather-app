import axios from "axios";
import {useEffect, useState} from "react";

const apiClient = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
    params: {
        key: '2eda6559ffcb476ca8c51600221906',
    },
});


export const useAxios = ({
    url, method, body=null, headers=null, options= {}
                         }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchInfo = () => {
        apiClient[method]({
            url,
            data: body,
            headers,
            ...options,
        })
        .then((res) => {
            setResponse(res?.data);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchInfo();
    }, [method, url, body, headers]);

    return { response, error, loading };
};