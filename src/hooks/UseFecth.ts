import { useEffect, useState } from 'react';

type UseFetchState = {
    state: 'idle' | 'loading' | 'success' | 'error';
    data: null | any;
    error: null | Error;
}

export default function UseFetch(url: string) {
    const [fetchState, setFetchState] = useState<UseFetchState>({
        state: 'idle',
        data: null,
        error: null
    })


    useEffect(function(){
        async function fetchData() {
            try {
                setFetchState((prevState) => ({
                    ...prevState,
                    state: 'loading'
                }))
                const response = await fetch(url,{
                method: 'GET',
                headers: {
                    'x-rapidapi-host':'v3.football.api-sports.io',
                    'x-rapidapi-key': '78ee851332310ce7a53693a37d768a90'
                }});
                if (response.ok) {
                    const json = await response.json();
                    setFetchState({
                        data: json,
                        state: 'success',
                        error: null
                    })
                }else{
                    setFetchState({
                        data: [],
                        state: 'error',
                        error: new Error(response.statusText)
                    })
                }

                
            } catch (error) {
                setFetchState({
                    data: [],
                    state: 'error',
                    error: error as Error
                })
            }
        
        
        }
        fetchData();    
    },[url])

    return fetchState;
}