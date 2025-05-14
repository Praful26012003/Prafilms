import { useEffect, useState } from "react"

export const useFetch = (apiPath) => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?language=en-US&page=1`


    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${process.env.REACT_APP_AUTHORIZATION_TOKEN}`
            }
        };

        const fetchData = async () => {
            const response = await fetch(url, options);
            const json = await response.json();
            setData(json.results);
        }
        fetchData();
    }, [url])

    return (
        { data }
    )
}
